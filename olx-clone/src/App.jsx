import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
    </>
  )
}

export default App
