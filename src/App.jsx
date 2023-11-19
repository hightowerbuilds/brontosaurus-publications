import Menu from './Menu'
import Library from './Library'
import Music from './Music'
import Time from './Time'
import BrontoHeader from './images/bronto-header.jpg'
import './App.css'



function App() {

  

  return (
    <div>
      <div style={{
        display: 'flex',
        position: 'absolute',
        left: 150,
        height: 200
      }}>
      < img src={BrontoHeader} style={{
        display: 'flex',
        position: 'absolute',
        

       }}/>
      </div>
      
    <div style={{
      height: 920,
      width: 140,
      fontFamily: 'monospace',
      fontSize: 22,
      color: 'beige',
      borderRight: '1px black solid'
  }}>
    <div style={{
      color: '#241424',
      fontSize: 12
    }}>
      <p>\ | / | \ | \ | / |</p>
      <p>- - - - - - - - - -</p>
    </div>
    <Menu />
    <Music />
    <Library />
    <Time />
    </div>
 
    </div>
    

  
  )
}

export default App

