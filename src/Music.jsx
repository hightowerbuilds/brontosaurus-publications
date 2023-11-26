import { useState } from "react"




export default function Music(){

    const [ open, setOpen ] = useState('')

    function handleClick(){
        open === '' ? setOpen(<MusicDisplay/>) : setOpen('')
    }
    
    
    return (
        <>
         <div onClick={handleClick}>
            music
        </div>
            {open}
        </>
       
    )
}

function MusicDisplay(){
    return (
        <>
        <div style={{
            display: 'flex',
            position: 'absolute',
            border: '1px seagreen solid',
            height: 720,
            width: 790,
            left: 150,
            top: 200,

        }}>
         
            <div style={{
                display: 'flex',
                position: 'absolute',
                backgroundColor: '#243557',
                borderRadius: 2,
                border: '1px seagreen dotted',
                height: 32,
                width: 780,
                left: 5,
                top:  5,
                fontSize: 24,
            }}>
               artist name : song name : album name : release date
            </div>
            <div style={{
                display: 'flex',
                position: 'absolute',
                justifyContent: 'space-between',
                backgroundColor: 'seagreen',
                borderRadius: 2,
                border: '1px #243557 dotted',
                height: 65,
                width: 250,
                left: 5,
                top:  42,
                padding: 6,
                
            }}>
            
                <button style={{
                     height: 60,
                     width: 42,
                     borderRadius: 10,
                     fontSize: 32,
                     color: 'seagreen'
                    
                }}>{'>'}</button>

                <button style={{
                  height: 60,
                  width: 42,
                  borderRadius: 10,
                  fontSize: 22,
                    fontWeight: 'bold',
                    color: 'seagreen'
                    
                }}>{'| |'}</button>

                <button style={{
                    height: 60,
                    width: 42,
                    borderRadius: 10,
                    fontSize: 32,
                    color: 'seagreen'
                    
                }}>{'>>'}</button>

                <button style={{
                      height: 60,
                      width: 42,
                      borderRadius: 10,
                      fontSize: 32,
                      color: 'seagreen'
                    
                }}>{'<<'}</button>

                <button style={{
                    height: 60,
                    width: 42,
                    borderRadius: 10,
                    fontSize: 32,
                    color: 'seagreen'
                    
                }}>{'#'}</button>
            </div>
            <div style={{
                display: 'flex',
                position: 'absolute',
                backgroundColor: '#200000',
                borderRadius: 2,
                border: '1px seagreen dotted',
                height: 78,
                width: 510,
                left: 275,
                top: 42,

            }}>
                
            </div>
        </div>
         
        </>
    )
}