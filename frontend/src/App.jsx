import './App.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Register from './pages/Register/Register'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/reg' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
