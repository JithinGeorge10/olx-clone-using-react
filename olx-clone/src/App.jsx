import React,{ Suspense, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
// import Home from './Pages/Home'
const Home=React.lazy(()=>import('./Pages/Home'))
import Signup from './Pages/Signup'
import Login from './Pages/login'
const Create=React.lazy(()=>import('./Pages/Create'))
import { AuthContext } from './Components/authContext';
import ViewPost from './Pages/viewPost';
import Loading from './Components/Loading/Loading';

function App() {
  const { user, isLoading } = useContext(AuthContext)
  console.log('check below')
  console.log({ user })

  if (isLoading) return <div>Loading...</div>
  return (
    <>   <Suspense fallback={<Loading/>}>
      <Routes>
     
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
        <Route path='/viewpost/:id' element={<ViewPost />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
