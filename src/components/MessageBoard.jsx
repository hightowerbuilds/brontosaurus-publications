import { useState } from "react"


export default function MessageBoard() {

const [ message, setMessage ] = useState('')
const handleTextInput = (event) => {
    setMessage(event.target.value)
}

const [board, setBoard] =  useState('')
const handleSetBoard = () => {
    const duffle = [];
    duffle.push(message)
   setBoard(duffle) 
    console.log('working maybe')
    setMessage('')
}


    return (
    <div>

        {/* MESSAGE ANMD COMMENT POSTING */}
      <div style={{
        display: 'inline-flex'
      }}>
          <div style={{
                width: '30%',
                border: '2px seagreen solid',
                margin: '2%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <textarea style={{
                  height: '30vh',
                  width: '100%',
                 padding: '5%'
                }} 
                type="text" 
                placeholder="INPUT TEXT HERE"
                value={message}
                onChange={handleTextInput}/>
              <button style={{
                width: '100%,',
                height: '2vh',
                fontFamily: 'monospace'
              }}
              onClick={handleSetBoard}>
               BUTTON
              </button>
          </div>

          <div style={{
                width: '60%',
                border: '2px seagreen solid',
                margin: '2%'
              }}>
            {message}
            {board}
          </div>
      </div>

    </div>
  )
}
