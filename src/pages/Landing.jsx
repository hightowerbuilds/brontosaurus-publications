

import { useRef, useEffect } from 'react';
import gameBackground from '../images/platformer-background.png'


export default function Landing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = gameBackground;

    image.onload = () => {
      context.drawImage(image, 0, 0);
    };
  }, [gameBackground]); // Re-execute effect if imageUrl changes

  return <canvas ref={canvasRef} width={1324} height={976} />;
}
