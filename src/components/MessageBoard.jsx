import React from 'react'

export default function MessageBoard() {
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
                <input style={{
                  height: '40vh',
                  width: '100%'
                }} type="text" 
                placeholder="INPUT TEXT HERE"/>
              <button style={{
                width: '100%,',
                height: '2vh',
              
              }}>
                SEND BUTTON
              </button>
          </div>

          <div style={{
                width: '60%',
                border: '2px seagreen solid',
                margin: '2%'
              }}>
            POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY  POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY  POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY POST DISPLAY 

          </div>
      </div>

    </div>
  )
}
