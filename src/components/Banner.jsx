import DinoCity from '../images/cityBronto.jpg'
import BrontoHeader from '../images/bronto-header.jpg'
import './Banner.css'


export default function Banner(){
    return (
      <>
        <div className='outerDiv'>
            <img src={BrontoHeader} />
        </div>
        <div className='innerDiv'> 
            <img  className='imageDino' src={DinoCity} />
            <p className='quote'>"Stop and smell the volcanos."</p>
        </div>
      </>
      

    )
}