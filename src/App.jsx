import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'



function App() {

  return (
    <Routes>
    <Route path="/landing" element={<Landing />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </ Routes>
  )
}

export default App

