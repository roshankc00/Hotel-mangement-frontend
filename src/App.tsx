import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup/index.';
import { Route,Routes } from 'react-router-dom';
function App() {

  return (
    <>
  <Routes>
  <Route path='/' element={<Signin/>}/>
  <Route path='/signup' element={<Signup/>}/>
  </Routes>
  <ToastContainer />
    </>
   
  )
}

export default App
