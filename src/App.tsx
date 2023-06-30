import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup/index.';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signin/>
    <Signup/>
    </>
   
  )
}

export default App
