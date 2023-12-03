
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

  const [ showing, setShowing ] = useState('none');
  const [ letters, setLetters] = useState('seagreen');
  const handleMouseOver = function(){
    showing === 'none' ? setShowing('block') : setShowing('none')
    letters === 'seagreen' ? setLetters('dodgerblue') : setLetters('seagreen')
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
           <div onMouseOver={handleMouseOver} className='historyTitle'  style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429',
             color: letters
           }}>
          ______history______
           </div>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429',
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





          <div style={{
            display: showing
          }}>
           
           <DropMenu 
           linkA=' A boop'
           linkB=' B boop'
           linkC=' C boop'
           linkD =' D boop'
           Radius={randomInt}
               />
      
       
          </div>
        </div>
    )
}