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
            width: 1000,
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
                height: 170,
                width: 200,
                border: '1px grey solid',
                backgroundColor: 'orangered',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                borderRadius: 2
            }}>
                one at a time baby
                <span style={{
                    height: 20,
                    width: 170,
                    fontSize: 18,
                    padding: 10,
                    margin: 2,
                    borderRadius: 15
                }}>imagine...
                </span>
                <span style={{
                    height: 20,
                    width: 170,
                    fontSize: 18,
                    padding: 10,
                    margin: 2,
                    borderRadius: 15
                }}>exert...</span>
                <button style={{
                    height: 20,
                    width: 140,
                    color: 'beige'
                }}>push the button</button>
            </div>
            <div style={{
                margin: 10,
                height: 170,
                width: 200,
                display: 'flex',
                flexWrap: 'wrap',
                border: '1px grey solid',
                backgroundColor: 'orangered',
                justifyContent: 'center'
            }}>
                BOX TWO
                <span style={{
                    height: 20,
                    width: 170,
                    fontSize: 18,
                    padding: 10,
                    margin: 2,
                    borderRadius: 15
                }}>display...
                </span>
                <span style={{
                    height: 20,
                    width: 170,
                    fontSize: 18,
                    padding: 10,
                    margin: 2,
                    borderRadius: 15
                }}>grimace...</span>
                <button style={{
                    height: 20,
                    width: 140,
                    color: 'beige'
                }}>push the button</button>
            </div>
        </div>
    )


}