import { useState } from "react"
import EssayView from './EssayView'

export default function Essays(){

const [ open, setOpen ] = useState('')
const [ textShade, setTextShade ] = useState('seagreen')
const handleClick = function() {
    open === '' ? setOpen(<EssayView/>) : setOpen('')
    textShade === 'seagreen' ? setTextShade('orange') : setTextShade('seagreen')
    } 


    
    return(
        <div style={{
            display: 'flex'
        }}>
        <div onClick={handleClick} style={{
            color: textShade
        }}>
        essays
        </div>

        <div>
        {open}
        </div>
        </div>
      
    )
}

