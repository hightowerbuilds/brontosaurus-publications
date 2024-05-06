import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Gallery from './pages/Gallery'
import Zines from './pages/Zines'
import GiftShop from './pages/GiftShop'
import Games from './pages/Games'
import SnakeGame from './pages/SnakeGame'
import SampleComponent from './components/SampleComponent'

function App() {

  return (
    <Routes>
    <Route path="/landing" element={<Landing />} />
    <Route path="/" element={<Dashboard />} />
    <Route path="/gallery" element={<Gallery />}/>
    <Route path='/zines' element={<Zines />}/>
    <Route path='/store' element={<GiftShop/>}  />
    <Route path='/games' element={<Games/>} />
    <Route path='/snake' element={<SnakeGame/>}/>
    <Route path='/sample' element={<SampleComponent/>}/>
  </ Routes>
  )
}

export default App

