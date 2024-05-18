import { useEffect, useRef } from 'react'
import './PlatformGame.css'


export default function PlatformGame() {

const canvasRef = useRef(null);
   
useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = 1624;
    const height = 976;
    let position = {
      x: 0,
      y: 1,
    }

    let velocity = {
      x: 1, 
      y: 1
    }

    let size = {
      height: 100
    }

    function draw() {
      context.fillStyle = 'black';
      context.fillRect( 0, 0, width, height)
      context.fillStyle = 'seagreen';
      context.fillRect(position.x, position.y, 100, size.height)

      if (position.y + size.height + velocity.y < canvas.height) {
        position.x += velocity.x
        velocity.x += 0.0
        position.y += velocity.y
        velocity.y += 0.4
      } else {
        velocity.y = 0;
      }

    }
     

    function animate(){
        window.requestAnimationFrame(animate)
        draw()
    } 
    
    animate()
}, [])

  return (
    <canvas ref={canvasRef} width={1024} height={576} />

       
    

  )
}
