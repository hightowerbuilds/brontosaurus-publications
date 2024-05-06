import { NavLink } from "react-router-dom"

export default function Gallery() {
  return (
    <>
          <NavLink 
      to='/'
      style={{
       fontFamily: 'monospace',
       fontSize: 18,
       color: 'seagreen'
      }}
      >back</NavLink>
       <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'monospace'
        }}
       >Art Gallery</div>
    </>
 
  )
}
