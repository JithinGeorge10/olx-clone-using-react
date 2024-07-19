import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/login'
import Create from './Pages/Create'
import { AuthContext } from './Components/authContext';
import ViewPost from './Pages/viewPost';

function App() {
  const { user, isLoading } = useContext(AuthContext)
  console.log('check below')
  console.log({ user })

  if (isLoading) return <div>Loading...</div>


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
        <Route path='/viewpost' element={<ViewPost />} />
      </Routes>
    </>
  )
}

export default App
