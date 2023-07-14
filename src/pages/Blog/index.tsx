import React, { useEffect, useState } from 'react'
import { deleteData, getData } from '../../services/axios.service'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux'
import { errorToast, loadingToast, sucessToast } from '../../services/toast.message.service';
function Blog() {
    const token=useSelector((state:any)=>{
        return state.auth.token
    })
    const [blogs, setblogs] = useState([])

    const getblogs=async()=>{
        const response=await getData('blogs',token)
        setblogs(response.blogs)
    }
    useEffect(()=>{
        getblogs()
    },[])


    const deleteBlog=async(id:string)=>{
        loadingToast()
        const response=await deleteData(`blog/${id}`,token)
        if(response.sucess){
            sucessToast(response.message)
            const remBlog=blogs.filter((blog:any)=>{
                return blog._id!==id
            })
            setblogs(remBlog)
        }else{
            errorToast(response.message)

        }

    }
    const updateBlog=async(id:string)=>{
        console.log(id)

    }
  return ( 
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
        {
            blogs.map((blog:any)=>{
                return(               
<div key={blog._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={blog?.image?.url} alt="" />
    </a>
    <p className='float-right bg-purple-700 text-white rounded-md p-1 m-2'>{blog.tag}</p>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>     
    </div>
    <div className="flex justify-center gap-8">
        <button className="buttonwala p-4" onClick={(e)=>{
            e.preventDefault()
            deleteBlog(blog._id)
        }}>
            <DeleteIcon/>
        </button>
        <button className="buttonwala p-4 " onClick={(e)=>{
            e.preventDefault()
            updateBlog(blog._id)
        }}>
            <EditIcon/>
        </button>
        
    </div>
</div>
     )
    })
}   


    </div>
  )
}

export default Blog   