import axios from 'axios'

const serverUrl=import.meta.env.VITE_SERVER_URL ?? ''
export const postTheData=async(url:string,data:any)=>{
    try {
        const response=await axios.post(`${serverUrl}/${url}`,data)
        return response.data
        
    } catch (error) {
        console.log(error)
        
    }

}





export const getData=async(url:string,data:any)=>{

    try {
        const response=await axios.post(`${serverUrl}/${url}`)
        return response.data
    } catch (error) {
        console.log(error)
        
    }
}