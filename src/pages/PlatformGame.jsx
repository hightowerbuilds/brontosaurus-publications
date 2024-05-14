import { useEffect, useRef } from 'react'
import './PlatformGame.css'


export default function PlatformGame() {

const canvasRef = useRef(null);
   
useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = 1024;
    const height = 576;

    let y = 10
    function animate(){
        window.requestAnimationFrame(animate)
        console.log('go')
        context.fillStyle = 'black';
        context.fillRect( 0, 0, width, height)
        context.fillStyle = 'seagreen';
        context.fillRect(10, y, 10, 10)

        context.fillStyle = 'seagreen';
        context.fillRect(100, y, 10, 10)
        y++
    }

    animate()
}, [])

  return (
    <canvas ref={canvasRef} width={1024} height={576} />

       
    

  )
}
