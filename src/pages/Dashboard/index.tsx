import React from 'react'
import {useSelector} from 'react-redux'
const Dashboard = () => {
  const content=useSelector(data=>{
    console.log(data,"me")
  })
  return (
    <div>
        Welcome to dashBoard
    </div>
  )
}

export default Dashboard