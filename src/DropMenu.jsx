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
                    justifyContent: 'flex-start'
                }}>
                <p>
                <a href={props.LinkA}>
                <h2 >{props.TitleA}</h2>
                </a>
                </p>
               
               <p>
                <h2></h2>
                <a>{props.LinkB}</a>
               </p>
            
            <a>{props.LinkC}</a>
            <a>{props.LinkD}</a>
            </div>
           
            </div> 
           </div>
    )
}