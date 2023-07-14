import { Button } from '@mui/material';
import React, { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Room",link:"/"},
      {name:"Food",link:"/"},
      {name:"Blogs",link:"/"},
      {name:"Testinomial",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center gap-20 bg-white md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb90hrHwhBxJbhL9TYPy8wp1VzleiafT-YzQ&usqp=CAU" className='h-23 w-28' alt="loading" />
       
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
      <MenuIcon/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
              <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500 text-decoration-none' >{link.name}</Link>
            </li>
          ))
        }
    
      </ul>
      </div>
    </div>
  )
}

export default Nav