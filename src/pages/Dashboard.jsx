import { NavLink } from "react-router-dom"


export default function Dashboard() {
  return (
    <div style={{
      height: '100vh',
      width: '95%',
      border: '3px seagreen dotted',
      margin: '2%'
    }}>

      <div style={{
        display: 'inline-flex'
      }}>
        <p>Brontosaurus Publications</p>  
        <NavLink to='/gallery' >Art Gallery</NavLink>
        <NavLink to='/zines'> Zines </NavLink>
        <NavLink to='/store'>Gift Shop</NavLink>
      </div>   
   
     
    </div>
  )
}
