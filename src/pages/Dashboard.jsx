import { NavLink } from "react-router-dom"
import MessageBoard from "../components/MessageBoard"
import BrontoHeader from '../images/bronto-header.jpg'
import Footer from "../components/Footer"
import CityBronto from '../images/cityBronto.jpg'
import './Dashboard.css'



export default function Dashboard() {
  return (

    <div className="outerContainer"> 
   
      <div 
      className="innerContainer"
      style={{
        display: 'inline-flex',
        width: '100%',
        borderBottom: '2px seagreen dotted',
        backgroundColor: '#47045844',
        borderRadius: 1
      }}>
        <p 
        className="headingP"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'monospace',
          fontSize: 30,
          margin: 10
        }}>
          <img 
          className="headingImg"
          style={{
            border: '1px seagreen solid',
            borderRadius: 2,
          }} 
          src={BrontoHeader}/>
        </p>  
        <p 
        className="navP"
        style={{
        display: 'inline-flex',
        width: '100%',
        borderLeft: '2px seagreen dotted',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <NavLink 
        className="galleryNavLink"
        to='/gallery' 
        style={{
            margin: '5%',
            fontFamily: 'monospace',
            fontSize: 24,
            color: 'seagreen'
        }}>Art Gallery</NavLink>
        <NavLink 
        className="zineNavLink"
        to='/zines' 
        style={{
            margin: '5%',
            fontFamily: 'monospace',
            fontSize: 34,
            color: 'seagreen'
        }}> Zines </NavLink>
        <NavLink 
        className="storeNavLink"
        to='/store' 
        style={{
            margin: '5%',
            fontFamily: 'monospace',
            fontSize: 34,
            color: 'seagreen'
        }}>Gift Shop</NavLink>
        <NavLink
        className="gamesNavLink" 
        to='/games' 
        style={{
            margin: '5%',
            fontFamily: 'monospace',
            fontSize: 34,
            color: 'seagreen'
        }}>Games</NavLink>
        
        </p>
      
      </div>   

      <section 
      className="mainSection"
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
      <img
        className="mainImg"
        style={{
          padding: 10,
        }}
        src={CityBronto}  />
      </section>
       
        <MessageBoard />
        <Footer />

    </div>
  )
}
