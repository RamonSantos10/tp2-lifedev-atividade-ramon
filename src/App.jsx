import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register/Register'
import Landing from './pages/Landing/Landing'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
