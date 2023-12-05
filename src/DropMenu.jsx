import { useState } from "react";

export default function DropMenu(props){
    return(
        <div style={{
            height: 660,
            width: 760,
            position: 'absolute',
            left: 10,
            top: 27,
            border: '1px black dotted',
            borderRadius: props.Radius

           }}>
            
            <div style={{
              
            }}>

            <h1>{props.Heading}</h1>
            <div style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                <p>
                <a href={props.LinkA}>
                <h2>{props.TitleA}</h2>
                </a>
                </p>
               
               <p>
                <a href={props.LinkB}>
                <h2>{props.TitleB}</h2>
                </a>
               </p>
            
               <p>
                <a href={props.LinkC}>
                <h2>{props.TitleC}</h2>
                </a>
               </p>
          
               <p>
                
                <a href={props.LinkD}>
                <h2>{props.TitleD}</h2>
                </a>
               </p>
            </div>
           
            </div> 
           </div>
    )
}