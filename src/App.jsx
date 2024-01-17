import Menu from './Menu'
import Essays from './Essays'
import Music from './Music'
import Time from './Time'
import DinoCity from './images/cityBronto.jpg'
import BrontoHeader from './images/bronto-header.jpg'
import './App.css'
import HeadlineArticle from './HeadlineArticle'
import Gibberish from './Gibberish'


function App() {

  return (
    <div>
       <p style={{
        fontFamily: 'monospace',
        fontSize: 12,
        color: 'seagreen',
        borderBottom: '.5px seagreen dotted'
      }}> 
     
      </p>
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
      height: 820,
      width: 140,
      fontFamily: 'monospace',
      fontSize: 16,
      color: 'seagreen',
      // borderRight: '1px seagreen dotted'
  }}>
    <div style={{
      color: 'black',
      fontSize: 12,
      
    }}>
     
    </div>
    <div style={{
      marginLeft: 35,
      marginTop: 20,
      borderLeft: '3px skyblue dotted',
      padding: 10
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

