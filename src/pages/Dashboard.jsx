import { NavLink } from "react-router-dom"
import MessageBoard from "../components/MessageBoard"
import BrontoHeader from '../images/bronto-header.jpg'
import Footer from "../components/Footer"
import CityBronto from '../images/cityBronto.jpg'
import './Dashboard.css'



export default function Dashboard() {
  return (

    <div className="outerContainer"> 
      <div className="innerContainer">
        <p className="headingP">
          <img 
          className="headingImg"
          src={BrontoHeader}/>
        </p>  

        <p className="navP">

        <NavLink className="galleryNavLink" to='/gallery'>art</NavLink>
        <NavLink className="zineNavLink" to='/zines'> zines </NavLink>
        <NavLink className="storeNavLink" to='/store'>if shop</NavLink>
        <NavLink className="gamesNavLink" to='/games' >games </NavLink>

        </p>
      
      </div>   

      <section className="mainSection">
        <img className="mainImg" src={CityBronto}/>
      </section>
       
        <MessageBoard />
        <Footer />

    </div>
  )
}
