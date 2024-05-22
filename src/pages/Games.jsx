import { NavLink } from "react-router-dom"
import './Games.css'
import HighScores from "../components/HighScores"



export default function Games() {
  return (
    <div>
      <p className="headingBox">
      <h2 className="gamesHeading">games </h2>
      <h5 className="subtitle">snake or die</h5>
      <h5 className="subtitleTwo">dont be a sucka freak</h5>
     
     
      </p>
    
      <ul>
        <li>
        <NavLink className="snakeHeading" to='/snake'>SNAKE</NavLink>
        </li>
        <br />
        <li>
        <NavLink className='platformHeading' to='/platform'>PLATFORM</NavLink>
        </li>
        <br />
        <li>
        <NavLink className="backButton" to='/'>
      back
      </NavLink>
        </li>
      </ul>

    
    <HighScores />


    </div>
  )
}
