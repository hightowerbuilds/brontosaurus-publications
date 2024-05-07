import './SnakeGame.css'
import { NavLink } from 'react-router-dom'
// import { GoogleFont } from 'react-google-fonts';


export default function SnakeGame() {

// game variables
  const board = document.getElementsByClassName('gameBoard')
  console.log(board)
  let snake = [{ x: 10, y: 10 }];

function draw(){
  board.innerHTML = '';
  drawSnake();
}

function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement)
    console.log(snakeElement)
  })
}

function createGameElement(tag, className){
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}



  return (
    <div className=" pageContainer">
        <div>
            <div className="scores">
                <h1 className="score">current score: 000</h1>
                <h1 className="highScore">high score: 000</h1>
            </div>

            <div className="gameBorderOne">
                <div className="gameBorderTwo">
                  <div className='gameBorderThree'>
                    <div className='gameBoard'>
          
                    </div>
                  </div>
                </div>
            </div>

          <h1 className='gameStart'>press spacebar to start the game</h1>
          <img src="" className='snakeLogo' />
        </div>
        <NavLink 
          to='/' 
          style={{
            position: 'absolute',
            top: '90vh',
            left: '5vh',
            fontSize: 36,
            backgroundColor: 'gold'
          }}
        >
        BACK TO DASHBOARD
        </NavLink>
    </div>
  )
}
