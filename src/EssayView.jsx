
import { useState } from "react";
import DropMenu from "./DropMenu";
import Waterburger from './images/Waterburger.jpg'

import './EssayView.css';

export default function EssayView(){


    return(
        <div style={{
            position: 'absolute',
            left: 150,
            top: 214,
            height: 720,
            width: 790,
            border: '1px seagreen dotted',
            backgroundColor: '#242429'
        }}>
            <ListEssays 
         
          
            />
        </div>
    )
}

function ListEssays(){
  const [ showingArt, setShowingArt ] = useState('none')
  const [ showingPhilosophy, setShowingPhilosophy ] = useState('none');
  const [ showingHistory, setShowingHistory ] = useState('none');
  const [ showingTechnology, setShowingTechnology ] = useState('none')
  const [ lettersA, setLettersA ] = useState('seagreen');
  const [ lettersB, setLettersB ] = useState('seagreen');
  const [ lettersC, setLettersC ] = useState('seagreen');
  const [ lettersD, setLettersD ] = useState('seagreen')

  const handleMouseOverA = function(){
    showingHistory === 'none' ? setShowingHistory('block') : setShowingHistory('none')
    lettersA === 'seagreen' ? setLettersA('dodgerblue') : setLettersA('seagreen')
  }
  const handleMouseOverB = function(){
    showingTechnology === 'none' ? setShowingTechnology('block') : setShowingTechnology('none')
    lettersB === 'seagreen' ? setLettersB('dodgerblue') : setLettersB('seagreen')
  }
  const handleMouseOverC = function(){
    showingPhilosophy === 'none' ? setShowingPhilosophy('block') : setShowingPhilosophy('none')
    lettersC === 'seagreen' ? setLettersC('dodgerblue') : setLettersC('seagreen')
  }
const handleMouseOverD = function(){
    showingArt === 'none' ? setShowingArt('block') : setShowingArt('none')
    lettersD === 'seagreen' ? setLettersD('dodgerblue') : setLettersD('seagreen')
}
  const randomInt = Math.floor(Math.random() * 50)
    return(
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: 2,
            randomInt: randomInt,
            backgroundColor: '#242429'
        }}>
           <div onMouseOver={handleMouseOverA} style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429',
             color: lettersA, 
             cursor: 'grabbing'
           }}>
          ______history______
           </div>
           <div onMouseOver={handleMouseOverB} style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429',
             color: lettersB,
             cursor: 'grab'
           }}>
            ______technology______
           </div>
           <div onMouseOver={handleMouseOverC} style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429',
             color: lettersC,
             cursor: 'grab'
           }}>
            ______philosophy______
           </div>
           <div onMouseOver={handleMouseOverD} style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429',
             color: lettersD
           }}>
            ______art______
           </div>

          {/**DIVs FOR EACH CATEGORY */}
           <div style={{
            display: showingHistory
          }}>
           
           <DropMenu 
              Heading={'dark matter lightens up'}
              IntroA={Waterburger}
            />
          </div>
          <div style={{
            display: showingTechnology
          }}>
             <DropMenu 
           linkA='tech article'
           linkB='hmm what is that aritcle'
           linkC='2'
           linkD ='3'
       
            />
          </div>
          <div style={{
            display: showingPhilosophy
          }}>
            <DropMenu />
          </div>

          <div style={{
            display: showingArt
          }}>
            <DropMenu />
          </div>
        </div>
    )
}