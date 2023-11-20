import { useState } from "react"
import BrontoCover from './images/BrontoZineOneCover.jpg'
import HalfCover from './images/FirstZineHalfCover.png'
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
                justifyContent: 'center',
                borderRadius: 2
            }}>
                <p style={{
                    backgroundColor: 'orangered',
                    fontSize: 12,
                    marginTop: 10,
                   marginLeft: 30
                }}>first zine</p>
               
               <img src={HalfCover} style={{
                height: 470,
                margin: 10
               }} />
                <p style={{
                    backgroundColor: 'orangered',
                    fontSize: 12,
                    marginLeft: 30
                }}>
                published? umm.. june 2014? 
                  <button style={{
                    marginLeft: 25,
                    width: 90,
                    fontFamily: 'monospace',
                    color: 'orangered'
                  }}>read</button>
                </p>
               
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