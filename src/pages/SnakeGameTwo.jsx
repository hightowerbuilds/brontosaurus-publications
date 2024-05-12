import { useInterval } from "../services/useInterval"
import { useRef, useState } from "react";
import Monitor from '../images/oldMonitor.png';
import AppleImg from '../images/applePixels.png';
import './SnakeGameTwo.css'


const canvasX = 1000;
const canvasY = 1000;
const initialState = [[4,10], [4,10]];
const initialApple = [14,10];
const scale = 50;
const timeDelay = 50;


export default function SnakeGameTwo() {
  


    function play() {
		setSnake(initialSnake)
		setApple(initialApple)
		setDirection([ 1, 0 ])
		setDelay(timeDelay)
		setScore(0)
		setGameOver(false)
	}



const canvasRef = useRef(null);
const [ snake, setSnake ] = useState(initialState);
const [ apple, setApple ] = useState(initialApple);
const [ direction, setDirection ] = useState([0, -1]);
const [ delay, setDelay] = useState(null);
const [ gameOver, setGameOver ] = useState(false);
const [ score, SetScore ] = useState(0);


    return (
    <div>
         <img src={AppleImg} alt="fruit" width={30}/>
         <img src={Monitor} alt="monitor" width={30} />
         <canvas className="playArea" ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
         <button onClick={play} className="playButton">
				Play
		</button>
        <div className="scoreBox">
				<h2>Score: {score}</h2>
				<h2>High Score: {localStorage.getItem("snakeScore")}</h2>
			</div>
    </div>
  )
}
