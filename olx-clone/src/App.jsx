import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import { AuthContext } from './Components/authContext';

function App() {
  const user = useContext(AuthContext)
  console.log({user})
  return (
    <>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
