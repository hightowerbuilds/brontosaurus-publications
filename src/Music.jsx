import { useState } from "react"




export default function Music(){

    const [ open, setOpen ] = useState('bleep')


    
    
    return (
        <>
         <div>
            music
        </div>
        <div style={{
            display: 'flex',
            position: 'absolute',
            border: '1px seagreen solid',
            height: 720,
            width: 790,
            left: 150,
            top: 200,

        }}>
            <h3>happy looking music pages</h3>
            <div style={{
                display: 'flex',
                position: 'absolute',
                backgroundColor: '#243557',
                borderRadius: 2,
                height: 125,
                width: 250,
                left: 5,
                top:  45
            }}>
                blue square
            </div>
            <div style={{
                display: 'flex',
                position: 'absolute',
                backgroundColor: '#263507',
                borderRadius: 2,
                height: 125,
                width: 250,
                left: 270,
                top:  45
            }}>
                green square
            </div>
            <div style={{
                display: 'flex',
                position: 'absolute',
                backgroundColor: '#200000',
                borderRadius: 2,
                height: 125,
                width: 250,
                left: 535,
                top: 45
            }}>
                maroon square
            </div>
        </div>
        </>
       
    )
}