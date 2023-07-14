import axios from 'axios'

const serverUrl=import.meta.env.VITE_API_URL ?? ''

export const addData=async(url:string,data:object)=>{
    try {
        const response=await axios.post(`${serverUrl}/${url}`,data)        
        return response.data
    } catch (error:any) {
        console.log(error)
    }
}



export const postDataWithHeader=async(url:string,data:any,token:any)=>{
    try {
        const response=await axios.post(`${serverUrl}/${url}`,data,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data
    } catch (error:any) {
        console.log(error)
    }
}




export const getData=async(url:string,token:any)=>{

    try {
        const response=await axios.get(`${serverUrl}/${url}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data
    } catch (error:any) {
        console.log(error)
    }
}
export const deleteData=async(url:string,token:any)=>{

    try {
        const response=await axios.delete(`${serverUrl}/${url}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data
    } catch (error:any) {
        console.log(error)
    }
}
