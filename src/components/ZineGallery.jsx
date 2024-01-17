import { useState } from 'react'
import './ZineGallery.css'

import pageOne from '../images/page 1.jpg'
import pageTwo from '../images/page 2-3.jpg'
import pageThree from '../images/page 4-5.jpg'
import pageFour from '../images/page 6-7.jpg'
import pageFive from '../images/page 8-9.jpg'
import pageSix from '../images/page 10-11.jpg'
import pageSeven from '../images/page 12-13.jpg'
import pageEight from '../images/page 16-17.jpg'
import pageNine from '../images/page 18-19.jpg'
import pageTen from '../images/page 20-21.jpg'
import pageEleven from '../images/page 22-23.jpg'
import pageTwelve from '../images/page 24-25.jpg'
import pageThirteen from '../images/page 26-27.jpg'
import pageFourteen from '../images/StarmanCenterPage.jpg'
import coverZineOne from '../images/BrontoZineOneCover.jpg'

export default function ZineGallery(){

    const imageBank = [

        coverZineOne, 
        pageOne, 
        pageTwo, 
        pageThree, 
        pageFour, 
        pageFive, 
        pageSix, 
        pageSeven, 
        pageEight, 
        pageNine,
        pageTen,
        pageEleven,
        pageTwelve,
        pageThirteen,
        pageFourteen

    ]

    const [ currentImage, setCurrentImage ] = useState(0)
    const handleNextButton = function(){currentImage < imageBank.length - 1 ? setCurrentImage(currentImage + 1) : setCurrentImage(0)}
    const handPreviousButton = function(){currentImage === 0 ? setCurrentImage(imageBank.length - 1) : setCurrentImage(currentImage - 1)}
    
    return (
        <div className='galleryContainer'>
            <img src={imageBank[currentImage]}></img>
            <p className='pageInfo'>zine image details can go on at length over here</p>
                <div className='buttonBox'>  
                    <button onClick={handPreviousButton} className='buttonPrev'> PREVIOUS</button>
                    <button onClick={handleNextButton} className='buttonNext'> NEXT</button>
                </div>
        </div>
    )
}