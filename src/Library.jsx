import { useState } from "react"

export default function Library(){
    
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

function EssayView(){
    return(
        <div style={{
            position: 'absolute',
            left: 150,
            top: 200,
            height: 720,
            width: 790,
            border: '1px seagreen dotted',
            backgroundColor: '#242429'
        }}>
            <ListEssays/>
        </div>
    )
}

function ListEssays(){
    return(
        <div>
            essays
        </div>
    )
}