import { NavLink } from "react-router-dom";


export default function GiftShop() {
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
    > "Where are all the gifts?" They cried.</div>
    </>
  
  )
}
