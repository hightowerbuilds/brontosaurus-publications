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
            <p className='quote'>"Probably..." - Many Have Said It</p>
        </div>
      </>
      

    )
}