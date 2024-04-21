import { NavLink } from "react-router-dom"
import MessageBoard from "../components/MessageBoard"


export default function Dashboard() {
  return (
    <div style={{
      height: '90vh',
      width: '95%',
      border: '2px seagreen dotted',
      margin: '2%'
    }}> 
  {/* THIS DIV IS THE HEADING AND HAS THE NAV BAR */}
      <div style={{
        display: 'inline-flex',
        width: '100%',
        borderBottom: '2px seagreen dotted'
      }}>
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          fontFamily: 'monospace',
          fontSize: 30,
          margin: 10
        }}>Brontosaurus Publications
        </p>  
        <p style={{
        display: 'inline-flex',
        width: '100%',
        borderLeft: '2px seagreen dotted',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <NavLink to='/gallery' style={{
          margin: '5%'
        }}>Art Gallery</NavLink>
        <NavLink to='/zines' style={{
          margin: '5%'
        }}> Zines </NavLink>
        <NavLink to='/store' style={{
          margin: '5%'
        }}>Gift Shop</NavLink>
        <NavLink to='/games' style={{
          margin: '5%'
        }}>Games</NavLink>
       
        
        </p>
      
      </div>   
   

        <MessageBoard />
      

    </div>
  )
}
