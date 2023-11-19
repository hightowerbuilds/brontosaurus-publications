import { useState } from "react"
import BrontoCover from './images/BrontoZineOneCover.jpg'

export default function Menu(){

const [ showing, setShowing ] = useState('menu')
const [ words, setWords ] = useState('')
const handleClick = function (){
    showing === 'menu' ? setShowing(<Container/>) : setShowing('menu')
    words === '' ? setWords('menu') : setWords('')
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
            width: 1220,
            position: 'absolute',
            top: 50, 
            left: 155,
            backgroundColor: '#242424',
            border: '1px beige solid'
        }}>
           <FeatureDisplay/>
        </div>
    )
}

function FeatureDisplay(){
    return (
        <div style={{
            display: 'inline-flex',
            
            backgroundColor: '#242424'
        }}>
            <div style={{
                margin: 10,
                height: 170,
                width: 200,
                border: '2px beige solid',
                backgroundColor: 'orangered',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                BOX one at a time baby
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
                border: '2px beige solid',
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
            <div style={{
                margin: 10,
                height: 170,
                width: 200,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                border: '2px beige solid',
                backgroundColor: 'orangered'
            }}>
                BOX THREE
                <span style={{
                    height: 20,
                    width: 170,
                    fontSize: 18,
                    padding: 10,
                    margin: 2,
                    borderRadius: 15
                }}>shine...
                </span>
                <span style={{
                    height: 20,
                    width: 170,
                    fontSize: 18,
                    padding: 10,
                    margin: 2,
                    borderRadius: 15
                }}>sheep...</span>
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
                justifyContent: 'center',
                border: '2px beige solid',
                backgroundColor: 'orangered'
            }}>
                BOX FOUR
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
         
        </div>
    )


}