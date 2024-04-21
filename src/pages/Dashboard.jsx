import { NavLink } from "react-router-dom"


export default function Dashboard() {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      border: '3px seagreen dotted',
      margin: '2%'
    }}>

      <div style={{
        display: 'inline-flex'
      }}>
        <p>Brontosaurus Publications</p>  
        <NavLink to='/gallery' >Art Gallery</NavLink>
        <NavLink to='/zines'> Zines </NavLink>
      </div>   
   
     
    </div>
  )
}
