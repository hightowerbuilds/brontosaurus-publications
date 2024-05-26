import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import './Articles.css'


export default function Articles() {
  return (
    <div>

        <h2 className='articlesHeading'>articles</h2>
        <div className='pageConatiner'>
            <div className='sidebarContainer'>
                sidebar
            </div>
            <div className='articleContainer'>
                    thoughts and ideas
            </div>
        </div>
        



        <NavLink to='/'>
        <Footer />
        </NavLink>
       
    </div>
  )
}
