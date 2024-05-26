import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import './Articles.css'


export default function Articles() {
  return (
    <div style={{backgroundColor: 'oldlace'}}>

        <h2 className='articlesHeading'>articles</h2>
        <div className='pageConatiner'>
            <div className='sidebarContainer'>
                <p className='sidebarContent'>
                    sidebar content
                </p>
            </div>
            <div className='articleContainer'>
                   <h2 className='articleTitle'>article title</h2>
                   <p className='articleContent'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum perferendis illo vitae sunt? Temporibus, vel qui saepe nemo maxime quidem? Doloribus iure consectetur error pariatur, fugit quisquam reiciendis perferendis.
                   </p>
            </div>
        </div>
        



        <NavLink to='/'>
        <Footer />
        </NavLink>
       
    </div>
  )
}
