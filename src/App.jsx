import Menu from './Menu'
import Essays from './Essays'
import Music from './Music'
import Time from './Time'
import DinoCity from './images/cityBronto.jpg'
import BrontoHeader from './images/bronto-header.jpg'
import './App.css'

function App() {

  

  return (
    <div>
      <div style={{
        display: 'flex',
        position: 'absolute',
        left: 150,
        height: 190,
        width: 790,
        marginTop: 12,
        backgroundColor: 'black',
        border: '1px seagreen dotted'
      }}>
      < img src={BrontoHeader} />
        <div style={{
            height: 190,
            width: 250,
            color: 'seagreen',
            backgroundColor: 'black',
            fontFamily: 'monospace',
          }}> 
          <img src={DinoCity} style={{
            height: 140,
            width: 230,
            marginTop: 15,
            marginLeft: 10

          }} />
          <p style={{
            paddingLeft: 10,
            backgroundColor: 'black'
          }}>"Probably, probably," - Many</p>
           </div>
      </div>
      
    <div style={{
      height: 960,
      width: 140,
      fontFamily: 'monospace',
      fontSize: 16,
      color: 'seagreen',
      borderRight: '1px seagreen dotted'
  }}>
    <div style={{
      color: 'black',
      fontSize: 12,
      
    }}>
      <p style={{
        color: 'seagreen'
      }}>\ | / | \ | \ | / |</p>
      <p style={{
        color: 'seagreen'
      }}>- - - - - - - - - -</p>
    </div>
    <div style={{
      marginLeft: 8
    }}>
    <Menu />
    <Music />
    <Essays />
    <Time />
    </div>
  
    </div>
 
    </div>
    

  
  )
}

export default App

