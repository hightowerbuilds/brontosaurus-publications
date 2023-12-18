import { useState } from 'react'
import pageOne from './images/page 1.jpg'
import pageTwo from './images/page 2-3.jpg'
import pageThree from './images/page 4-5.jpg'
import pageFour from './images/page 6-7.jpg'
import pageFive from './images/page 8-9.jpg'
import pageSix from './images/page 10-11.jpg'
import pageSeven from './images/page 12-13.jpg'
import pageEight from './images/page 16-17.jpg'
import pageNine from './images/page 18-19.jpg'
import pageTen from './images/page 20-21.jpg'
import pageEleven from './images/page 22-23.jpg'
import pageTwelve from './images/page 24-25.jpg'
import pageThirteen from './images/page 26-27.jpg'
import pageFourteen from './images/StarmanCenterPage.jpg'
import coverZineOne from './images/BrontoZineOneCover.jpg'

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
    const handleButton = function(){
        currentImage < imageBank.length - 1 ? setCurrentImage(currentImage + 1) : setCurrentImage(0)
    }
    



    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            position: 'absolute',
            top: 630,
            left: -120

        }}>
           <h3 style={{
            border: '1px seagreen dotted'
           }}>zine gallery</h3>
            <img src={imageBank[currentImage]}></img>
            <p style={{
                position: 'absolute',
                left: 1000,
                top: 20,
                display: 'flex',
                width: 380,
                border: '1px seagreen dotted'
            }}>zine image details can go on at length over here</p>
           <div style={{
            position: 'absolute',
            left: 1000,
            top: 600
           }}> 

                <button style={{
                    width: 380,
                    height: 50,
                    borderRadius: 5
                }}> PREVIOUS</button>
                <button 
                onClick={handleButton}
                style={{
                    width: 380,
                    height: 50,
                    borderRadius: 5
                }}> NEXT</button>
                
            </div>
        </div>
    )
}