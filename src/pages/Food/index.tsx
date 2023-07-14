import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { deleteData, getData } from '../../services/axios.service';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { errorToast, loadingToast, sucessToast } from '../../services/toast.message.service';

export default function MediaCard() {
    const token=useSelector((state:any)=>{
        return state.auth.token
    })
    if(token){
        console.log(token)
    }
    const [foods, setfoods] = useState([])

    const getTheData=async()=>{
       const data=await  getData('/foods',token)
       setfoods(data.allFoods.data)
    }
    useEffect(()=>{
        getTheData()
        console.log(foods)
    },[])
const  updateFood=(id:string)=>{
    console.log(id)
}
const  deleteFood=async(id:string)=>{
    loadingToast()
    const response=await deleteData(`food/${id}`,token)

    if(response.sucess){
        sucessToast(response.message)
        const foodRem=foods.filter((food:any)=>{
            return food._id!==id
        })
        setfoods(foodRem)
    }else{
        errorToast(response.message)
    }
}
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3' >
          
    {foods&&
        foods.map((food:any,foodIndex:number)=>{
            console.log(food?.image?.url)
       

            
           return (

            <div key={food._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
        
                <img className="rounded-t-lg" src={`${food?.image?.url}`} alt="" />
            <div className="p-5">
                <p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.name}</h5>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <del>${food.price}</del>
                    <span className='ms-2'>${food.priceAfterDiscount}</span>
                </p>
                <div className="flex justify-between">
                <button className="buttonwala" onClick={(e)=>{
                        e.preventDefault();
                        deleteFood(food._id)
                    }}>
                    <DeleteIcon/>
                    </button>
                    <button className="buttonwala" onClick={(e)=>{
                        e.preventDefault();
                        updateFood(food._id)
                    }}>
                    <EditIcon/>
                    </button>
                </div>
               
                   
                    
            </div>
        </div>
    )
    })
}
</div>
);
}