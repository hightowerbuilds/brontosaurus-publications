import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Gallery from './pages/Gallery'
import Zines from './pages/Zines'


function App() {

  return (
    <Routes>
    <Route path="/landing" element={<Landing />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/gallery" element={<Gallery />}/>
    <Route path='/zines' element={<Zines />}/>
  </ Routes>
  )
}

export default App

