import './SnakeGame.css'
import { NavLink } from 'react-router-dom'
// import { GoogleFont } from 'react-google-fonts';


export default function SnakeGame() {


// how to translate this js into react logic? 

// draw board 
// draw snake

// this puts the snake in the center of this gameboard 
// const snake = [{ x: 10, y: 10 }];

function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake')
  })
}

function createGameElement(tag, className){
  return 
}


  return (
    <div className=" pageContainer">
      {/* <GoogleFont fonts={['VT323', 'Open Sans']}/> */}
          {/* <p style={{ fontFamily: 'VT323'}}> letters go here </p> */}
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
