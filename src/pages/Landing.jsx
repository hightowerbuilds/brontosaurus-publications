import { Link } from "react-router-dom"
import Banner from "../components/Banner"


export default function Landing() {
  return (
    <div style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
       
    }}>
        <Banner />
        <Link style={{
          position: 'absolute',
          top: '80%',
          fontFamily: 'monospace',
          fontSize: 20,
          color: 'seagreen'
        }} to='/'>
          Enter
        </Link>
    </div>
   
  )
}
