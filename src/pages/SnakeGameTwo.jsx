import { useInterval } from "../services/useInterval"
import { useRef, useState } from "react";
import { supabase } from "../services/supabase";

import AppleImg from '../images/applePixels.png';
import './SnakeGameTwo.css'
import { useEffect } from "react";
import { NavLink } from "react-router-dom";


const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [[4,10], [4,10]];
const initialApple = [14,10];
const scale = 50;
const timeDelay = 100;


export default function SnakeGameTwo() {
  

const canvasRef = useRef(null);
const [ snake, setSnake ] = useState(initialSnake);
const [ apple, setApple ] = useState(initialApple);
const [ direction, setDirection ] = useState([0, -1]);
const [ delay, setDelay] = useState(null);
const [ gameOver, setGameOver ] = useState(false);
const [ score, setScore ] = useState(0);
const [ name, setName ] = useState('')
const [ entry, setEntry ] = useState('') 


useInterval(() => runGame(), delay)

useEffect(
    () => {
        let fruit = document.getElementById("fruit") 
        if (canvasRef.current) {
            const canvas = canvasRef.current
            const ctx = canvas.getContext("2d")
            if (ctx) {
                ctx.setTransform(scale, 0, 0, scale, 0, 0)
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
                ctx.fillStyle = "seagreen"
                snake.forEach(([ x, y ]) => ctx.fillRect(x, y, 1, 1))
                ctx.drawImage(fruit, apple[0], apple[1], 1, 1)
            }
        }
    },
    [ snake, apple, gameOver ]
)
    const rowData = {
        name: name,
        score: score
    }

    const createScore = async (tableName, data) => {
        try {
            const { error } = await supabase
            .from(tableName)
            .insert([data]);
            if (error) throw error;
            // setIsLoading(false)
            console.log('success');
          } catch (error) {
            // setError('error')
            console.log('error')
          }
        }
  




function handleSetScore() {
    if (score > Number(localStorage.getItem("snakeScore"))) {
        localStorage.setItem("snakeScore", JSON.stringify(score))
       
    }
}

function play() {
    setSnake(initialSnake)
    setApple(initialApple)
    setDirection([ 1, 0 ])
    setDelay(timeDelay)
    setScore(0)
    setGameOver(false)
}

function checkCollision(head){
    for (let i = 0; i < head.length; i++){
        if (head[i] < 0 || head[i] * scale >= canvasX) return true
    }
    for (const s of snake) {
        if (head[0] === s[0] && head[1] === s[1]) return true
    }
    return false
}


function appleAte(newSnake) {
    let coord = apple.map(() => Math.floor(Math.random() * canvasX / scale))
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
        let newApple = coord
        setScore(score + 1)
        setApple(newApple)
        return true
    }
    return false
}


function runGame() {
    const newSnake = [ ...snake ]
    const newSnakeHead = [ newSnake[0][0] + direction[0], newSnake[0][1] + direction[1] ]
    newSnake.unshift(newSnakeHead)
    if (checkCollision(newSnakeHead)) {
        setDelay(null)
        setGameOver(true)
        handleSetScore()
        createScore('high_scores', rowData )
    }
    if (!appleAte(newSnake)) {
        newSnake.pop()
    }
    setSnake(newSnake)
}


function changeDirection (e) {
    switch (e.key) {
        case "ArrowLeft":
            setDirection([-1, 0])
            break
        case "ArrowUp":
            setDirection([0, -1])
            break
        case "ArrowRight": 
            setDirection([1, 0])
            break 
        case "ArrowDown":
            setDirection([0, 1])
            break
    } 
}

const handleNameEntry = () => {
    setEntry( 
        <button onClick={play} className="playButton">
                {/*  */}
            Play
        </button>   )
    
}
const handleInput = (e) => setName(e.target.value)

    return (

        <>
         <NavLink className='backButton' to='/games'>BBBBBACK</NavLink> 
        <p className="logoBox">
       
        <h1 className="name">Snake</h1>
         <div className="scoreBox">
				<p>player: {name}</p>
                <p>score: {score}</p>
				<p>high score: {localStorage.getItem("snakeScore")}</p>
			</div>
          
        </p>
       

        <div className="background" onKeyDown={(e) => changeDirection(e)}>
        <img id='fruit' src={AppleImg} alt="fruit" width={30}/>
        {/* <img className="monitor" src={Monitor} alt="monitor" width={30} /> */}
        <canvas className="playArea" ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
       
            {!entry ? 
                    <p className="nameDisplay">
                        <p className="nameShown"></p>
                        <div style={{ padding: 30, borderBottom: '2px red dashed'}}>
                        <input placeholder="ENTER NAME" className="nameInput" type="text" value={name} onChange={handleInput}/>
                        </div>
                     
                        <br />
                        <br />
                        <div>
                            
                        </div>
                        <div className="buttonName" onClick={handleNameEntry}>CLICK TO BEGIN</div>
                    </p> 
            : entry}
            {gameOver && <div className="gameOver"> <NavLink to='/games'>give up? </NavLink> </div>}
    </div>
        </>
   
  )
}
