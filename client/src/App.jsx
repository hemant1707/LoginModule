<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
=======
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
>>>>>>> origin/main
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import Home from './components/Home'
import NavBar from './components/NavBar'
<<<<<<< HEAD
import { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const IsloogedInContext = createContext();
export const SetIsloogedInContext = createContext();
function App() {
  const [isloogedIn, setIsloogedIn] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/user", { withCredentials: true }).then((res) => {
      if (res.data.user) {
        setIsloogedIn(true);
      } else {
        setIsloogedIn(false);
      }
    }).catch((err) => {
      console.log(err);
      setIsloogedIn(false);
    })
  }, []);
  return (
    <>
      <IsloogedInContext.Provider value={isloogedIn}>
        <SetIsloogedInContext.Provider value={setIsloogedIn} >
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/login" element={isloogedIn ? <Navigate to="/Home" /> : <Login />}></Route>
              <Route path="/signup" element={isloogedIn ? <Navigate to="/Home" /> : <Signup />}></Route>
              <Route path="/home" element={isloogedIn ? <Home /> : <Navigate to="/login" />}></Route>
            </Routes>
          </BrowserRouter>
        </SetIsloogedInContext.Provider>
      </IsloogedInContext.Provider>
=======
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

>>>>>>> origin/main
    </>
  )
}

export default App
