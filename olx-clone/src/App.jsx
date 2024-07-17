import { useEffect, useState,createContext } from 'react';
import {  Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const UserContext = createContext()
  return (
    <>
        {/* <UserContext.Provider value={user}> */}
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/signup' element={ <Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        {/* </UserContext.Provider> */}

    </>
  )
}

export default App
