import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Zines from './pages/Zines'
import GiftShop from './pages/GiftShop'
import Games from './pages/Games'
import SnakeGameTwo from './pages/SnakeGameTwo'
import PlatformGame from './pages/PlatformGame'
import Articles from './pages/Articles'

function App() {

  return (
    <Routes>
    <Route path="/landing" element={<Landing />} />
    <Route path="/" element={<Dashboard />} />
    <Route path="/articles" element={<Articles />}/>
    <Route path='/zines' element={<Zines />}/>
    <Route path='/store' element={<GiftShop/>}  />
    <Route path='/games' element={<Games/>} />
    <Route path='/snake' element={<SnakeGameTwo/>}/>
    <Route path='/platform' element={<PlatformGame />}/>
  </ Routes>
  )
}

export default App

