import { useState } from "react"
import BrontoCover from './images/BrontoZineOneCover.jpg'

export default function Menu(){

const [ showing, setShowing ] = useState('zines')
const [ words, setWords ] = useState('')
const handleClick = function (){
    showing === 'zines' ? setShowing(<Container/>) : setShowing('zines')
    words === '' ? setWords('zines') : setWords('')
}

    return(
        <div onClick={handleClick}>
           
        {words}
        {showing}

        </div>
    )
}


function Container(){
    return (
        <div style={{
            height: 600,
            width: 790,
            position: 'absolute',
            top: 200, 
            left: 150,
            backgroundColor: 'black',
            border: '1px darkgreen solid'
        }}>
           <FeatureDisplay/>
        </div>
    )
}

function FeatureDisplay(){
    return (
        <div style={{
            display: 'inline-flex',
            backgroundColor: 'black'
        }}>
            <div style={{
                margin: 10,
                height: 570,
                width: 370,
                border: '1px grey solid',
                backgroundColor: 'orangered',
                display: 'flex',
                
                flexWrap: 'wrap',
               
                justifyContent: 'center',
                borderRadius: 2
            }}>
               first zine
            </div>
            <div style={{
                margin: 10,
                height: 570,
                width: 370,
                display: 'flex',
                flexWrap: 'wrap',
                border: '1px grey solid',
                backgroundColor: '#246454',
                justifyContent: 'center'
            }}>
               second zine 
            </div>
        </div>
    )


}