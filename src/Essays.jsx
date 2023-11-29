import { useState } from "react"

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
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: 2,
            
            backgroundColor: '#242429'
        }}>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429'
           }}>
            ______history______
           </div>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429'
           }}>
            ______technology______
           </div>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429'
           }}>
            ______philosophy______
           </div>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429'
           }}>
            ______art______
           </div>
          <div>
          <div style={{
            height: 300,
            width: 172,
            position: 'absolute',
            left: 10,
            top: 27,
            border: '1px black dotted',
            borderRadius: 3

           }}>
            ...next component goes here.
           </div>
           <div style={{
            height: 300,
            width: 200,
            position: 'absolute',
            left: 202,
            top: 27,
            border: '1px black dotted',
            borderRadius: 3

           }}>
            first menu
           </div>
           <div style={{
            height: 300,
            width: 198,
            position: 'absolute',
            left: 422,
            top: 27,
            border: '1px black dotted',
            borderRadius: 3

           }}>
            first menu
           </div>
           <div style={{
            height: 300,
            width: 132,
            position: 'absolute',
            left: 638,
            top: 27,
            border: '1px black dotted',
            borderRadius: 3

           }}>
            first menu
           </div>
          </div>
        </div>
    )
}