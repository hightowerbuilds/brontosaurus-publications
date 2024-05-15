import { NavLink } from "react-router-dom";
import Covers from "../components/Covers";
import { useState } from "react";
import Logo from '../images/zine_logo.png'


const MODAL_STYLE = {
  position: 'absolute',
  zIndex: 3
}

const DEF_STYLE = {
  position: 'absolute',
  zIndex: -1
}


export default function Zines() {

  const [ modalStyle, setModalStyle ] = useState(DEF_STYLE) 

  return (

<>
<img src={Logo} style={{ position: 'absolute', zIndex: 2, backgroundColor: 'transparent', margin: 30}}/>
<div style={{
      height: '100vh',
      width: '100%',
      backgroundColor: '#242424',
      border: '2px maroon dotted', 
      display: 'flex',
      justifyContent: 'center'
      
    }}>
     
      <p style={{
        backgroundColor: 'inherit',
        fontFamily: 'monospace',
        fontSize: 22,
        marginTop: 30,
      }}>

      <Covers />
      <br />
      

      <p style={{
        backgroundColor: 'inherit', 
        margin: 50,
        borderTop: '3px grey solid',
        paddingTop: 25
      }}>
        Zines 
        <br /> 
        <br />
        It's not a palace, or riveted barge, infested den, nor raft of Medusa. It's not a thing nor nothing yet it is what it is.  
        <br />    
        <br />
        <NavLink 
      to='/'
      style={{
        fontFamily: 'monospace',
        fontSize: 24
      }}>
        Back
      </NavLink>

      <button onClick={() => {setModalStyle(MODAL_STYLE)}}>open modal</button>
     
      <div style={modalStyle}>
        but this works just fine
        <button onClick={() => {setModalStyle(DEF_STYLE)}}>close modal</button>
      </div>
      </p>
      </p>
      
    </div>

</>

    
  )
}
