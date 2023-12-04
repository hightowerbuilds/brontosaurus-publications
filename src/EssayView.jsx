
import { useState } from "react";
import DropMenu from "./DropMenu";
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

  const [ showingHistory, setShowingHistory ] = useState('none');
  const [ showingTechnology, setShowingTechnology ] = useState('none')
  const [ lettersA, setLettersA ] = useState('seagreen');
  const [ lettersB, setLettersB ] = useState('seagreen')
  const handleMouseOverA = function(){
    showingHistory === 'none' ? setShowingHistory('block') : setShowingHistory('none')
    lettersA === 'seagreen' ? setLettersA('dodgerblue') : setLettersA('seagreen')
  }
  const handleMouseOverB = function(){
    showingTechnology === 'none' ? setShowingTechnology('block') : setShowingTechnology('none')
    lettersB === 'seagreen' ? setLettersB('dodgerblue') : setLettersB('seagreen')
  }


  const randomInt = Math.floor(Math.random() * 50)
    return(
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: 2,
            
            backgroundColor: '#242429'
        }}>
           <div onMouseOver={handleMouseOverA} style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429',
             color: lettersA
           }}>
          ______history______
           </div>
           <div onMouseOver={handleMouseOverB} style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429',
             color: lettersB
           }}>
            ______technology______
           </div>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429'
           }}>
            ______philosophy______
           </div>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429'
           }}>
            ______art______
           </div>

          {/**DIVs FOR EACH CATEGORY */}
           <div style={{
            display: showingHistory
          }}>
           
           <DropMenu 
           linkA=' A boop'
           linkB=' B boop'
           linkC=' C boop'
           linkD =' D boop'
       
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
       
        </div>
    )
}