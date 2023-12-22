import { useState } from "react"
import HalfCover from './images/FirstZineHalfCover.png'
import ZineGallery from "./ZineGallery"
export default function Menu(){

const [ showing, setShowing ] = useState('')
const [ textShade, setTextShade ] = useState('seagreen')
const handleClick = function (){
    showing === '' ? setShowing(<Container/>) : setShowing('')
    textShade === 'seagreen' ? setTextShade('orange') : setTextShade('seagreen')
}

    return(
        <div style={{
            display: 'inline-flex'
        }}>
         <div onClick={handleClick} style={{
            color: textShade
         }}>
           zines
           </div>
           <div>
            
           {showing}
           </div>
        </div>
       
    )
}


function Container(){

    return (
        <div style={{
            height: 600,
            width: 790,
            position: 'absolute',
            top: 215, 
            left: 150,
            backgroundColor: 'black',
            border: '1px darkgreen solid'
        }}>
           <FeatureDisplay/>
        </div>
    )
}

function FeatureDisplay(){
    
    const [ gallery, setGallery ] = useState('')
    const handleButton = function(){
        gallery === '' ? setGallery(<ZineGallery/>) : setGallery('')
    }
    
    return (
        
        <>
        <div style={{
            display: 'inline-flex',
            backgroundColor: 'black'
        }}>
            <div style={{
                margin: 10,
                height: 570,
                width: 370,
                border: '1px grey solid',
                justifyContent: 'center',
                borderRadius: 2
            }}>
                <p style={{
                   
                    fontSize: 12,
                    color: 'orangered',
                    marginTop: 10,
                   marginLeft: 30
                }}>first zine</p>
               
               <img src={HalfCover} style={{
                height: 470,
                margin: 10
               }} />
                <p style={{
                   
                    fontSize: 12,
                    marginLeft: 30,
                    color: 'orangered'
                }}>
                published? umm.. june 2014? 
                  <button  
                  onClick={handleButton}
                  style={{
                    marginLeft: 25,
                    width: 90,
                    fontFamily: 'monospace',
                    color: 'orangered'
                  }}>read
                  
                 { /** 
                    this is where we need to put the gallery of zine images
                    also the 'menu' component needs to disappear and then reappear after the gallery is closed  

                    this seems to be a similar issue found in opening multiple features in the app component
                    we need a function to handle the div closing (disappear) before the other div fills in the space
                    and visa versa the other way
                */}
                  
                  </button>
                </p>
               
            </div>
            <div style={{
                margin: 10,
                height: 570,
                width: 370,
                display: 'flex',
                flexWrap: 'wrap',
                border: '1px grey solid',
             
                justifyContent: 'center'
            }}>
               second zine 
            </div>
        </div>

        {gallery}
        
        </>
    )


}