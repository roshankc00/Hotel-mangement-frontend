import { useState } from 'react'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup/index.';
import { Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { Dashboard } from '@mui/icons-material';
import AddRoom from './components/Forms/AddRoom';
import AddFood from './components/Forms/AddFood';
import AddBlog from './components/Forms/AddVlog';
import Room from './pages/Room';
import Blog from './pages/Blog';
import Food from './pages/Food';
import Sidebar from './components/Sidebar';
function App() {

  return (
    <>
  <Routes>
  <Route path='/' element={<Signin/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/' element={<Sidebar/>}>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/addfoodform' element={<AddFood/>}/>
  <Route path='/addroomform' element={<AddRoom/>}/>
  <Route path='/addroomform' element={<AddBlog/>}/>
  <Route path='/room' element={<Room/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/food' element={<Food/>}/>
  </Route>

  </Routes>
  <ToastContainer/>
    </>
   
  )
}

export default App
