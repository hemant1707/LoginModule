import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import Home from './components/Home'
import NavBar from './components/NavBar'
function App() {

  return (
    <>
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
