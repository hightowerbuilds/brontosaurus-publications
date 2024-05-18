import { useEffect, useRef } from 'react'
import './PlatformGame.css'


export default function PlatformGame() {

const canvasRef = useRef(null);
   
useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = 2024;
    const height = 976;
    let position = {
      x: 0,
      y: 1,
    }

    let velocity = {
      x: 0.1, 
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

      velocity.x = 0
      if(keys.d.pressed) velocity.x = 1
      else if (keys.a.pressed) velocity.x = -1

      
    }

    const keys = {
      d: {
        pressed: false,
      },
      a: {
        pressed: false,
      }
    }
     

    function animate(){
        window.requestAnimationFrame(animate)
        draw()
    } 
    
    animate()


    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'd':  keys.d.pressed = true
        break
        case 'a':  keys.a.pressed = true
        break
        case 'w': velocity.y = -15
      }
    })

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'd':
          keys.d.pressed = false
          break
        case 'a':
          keys.a.pressed = false
          break
      }
    })



}, [])


  


  return (
    <canvas className='layout' ref={canvasRef} width={1324} height={976} />

       
    

  )
}
