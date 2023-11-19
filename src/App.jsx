import Menu from './Menu'
import Library from './Library'
import Headline from './Headline'
import Time from './Time'
import BrontoCover from './images/BrontoZineOneCover.jpg'
import './App.css'



function App() {

  

  return (
    <div>
    <div style={{
      height: 920,
      width: 140,
      fontFamily: 'monospace',
      fontSize: 22,
      color: 'beige',
      borderRight: '1px black solid'
  }}>
    <Menu />
    <Headline />
    <Library />
    <Time />
    </div>
  
    </div>
    

  
  )
}

export default App

