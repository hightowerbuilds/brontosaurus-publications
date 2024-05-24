import { NavLink } from "react-router-dom";
import Footer from '../components/Footer'

export default function GiftShop() {
  return (
    <>
 
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
    <NavLink to='/'>
    <Footer />
    </NavLink>
   
    </>
  
  )
}
