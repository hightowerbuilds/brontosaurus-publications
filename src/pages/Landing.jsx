import { onMount } from 'solid-js'
import gameBackground from '../assets/platformer-background.png'

export default function Landing() {
  let canvasRef

  onMount(() => {
    const context = canvasRef.getContext('2d')

    const image = new Image()
    image.src = gameBackground

    image.onload = () => {
      context.drawImage(image, 0, 0)
    }
  })

  return <canvas ref={canvasRef} width={1324} height={976} />
}
