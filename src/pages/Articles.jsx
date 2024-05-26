import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import './Articles.css'


export default function Articles() {
  return (
    <div>

        <h2>articles</h2>

        <NavLink to='/'>
        <Footer />
        </NavLink>
       
    </div>
  )
}
