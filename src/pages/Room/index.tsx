import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { deleteData, getData } from '../../services/axios.service';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { errorToast, loadingToast, sucessToast } from '../../services/toast.message.service';

const Room = () => {
    const token=useSelector((state:any)=>{
        return state.auth.token
    })
    const navigate=useNavigate()
    const [rooms, setrooms] = useState([])
    const postData=async()=>{
        const response=await getData('rooms',token)
        console.log(response.allRooms.data)
        if(response.sucess){
            setrooms(response.allRooms.data)
        }
    }
    useEffect(()=>{
        postData()
    },[])



    const  deleteRoom=async(id:string)=>{
        loadingToast()
        const response=await deleteData(`room/${id}`,token)
        if(response.sucess){
            sucessToast(response.message)
            const roomRem=rooms.filter((food:any)=>{
                return food._id!==id
            })
            setrooms(roomRem)
        }else{
            errorToast(response.message)
        }
    }
const updateRoom=(id:string)=>{
    console.log(id)

}


return (
    <div className='container'>
        <div className="flex justify-between">

        <Typography variant='h4' component='h1'>Room</Typography>
        <Button variant='contained' onClick={(e)=>{
            e.preventDefault()
            navigate('/addroomform')
        }}>  AddRoom</Button>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


        {rooms&& 
        rooms.map((room:any)=>{
            return(
                <div key={room._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3">
    <div className='mb-2'>
        <img className="rounded-t-lg" src={room?.image?.url} alt="" />
    </div>
    <div className="p-5">
            <h5 className="mb-3 font-normal text-dark">title:{room.title}</h5>
        <p className="mb-3 font-normal text-dark">description:{room.description}</p>     
    </div>
    <div className="flex justify-center gap-8">
        <button className="buttonwala p-4" onClick={(e)=>{
            e.preventDefault()
            deleteRoom(room._id)
        }}>
            <DeleteIcon/>
        </button>
        <button className="buttonwala p-4 " onClick={(e)=>{
            e.preventDefault()
            updateRoom(room._id)
        }}>
            <EditIcon/>
        </button>
        
    </div>
</div>
            )
        })

        }
</div>
    </div>
  )
}

export default Room 