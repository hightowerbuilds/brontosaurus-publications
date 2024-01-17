import Menu from './Menu'
import Essays from './Essays'
import Music from './Music'
import Time from './Time'
import DinoCity from './images/cityBronto.jpg'
import BrontoHeader from './images/bronto-header.jpg'
import './App.css'
import HeadlineArticle from './HeadlineArticle'
import Gibberish from './Gibberish'
import Banner from './components/Banner'


function App() {

  return (
    <div>
    
     <Banner/>
      
    <div style={{
      height: 820,
      width: 140,
      fontFamily: 'monospace',
      fontSize: 16,
      color: 'seagreen',
      // borderRight: '1px seagreen dotted'
  }}>
 
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

