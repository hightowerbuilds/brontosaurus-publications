import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from '../images/zine_logo.png'
import './Zines.css'





export default function Zines() {

 
  return (

<div className="backgroundZinesPage">

   <p className="containerZinesPage">
   <NavLink className='backButtonZinesPage' to='/'>back</NavLink> 
   <NavLink className='gamesLinkZinesPage' to='/games'>games</NavLink>
   <br />
   <br />
   <p className="randomThought"> It's not a palace, or riveted barge, infested den, nor raft of Medusa. It's not a thing nor nothing yet it is.   </p>
   </p>



<img src={Logo} className="zinesImage" />


<div className="zinesListBox">
    Zines List Component
</div>

</div>



    
  )
}
