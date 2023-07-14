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
function App() {

  return (
    <>
    <AddFood/>
  <Routes>
  <Route path='/' element={<Signin/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
  <ToastContainer/>
    </>
   
  )
}

export default App
