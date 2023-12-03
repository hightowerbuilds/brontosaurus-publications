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
            <a>{props.linkA}</a>
            <a>{props.linkB}</a>
            <a>{props.linkC}</a>
            <a>{props.linkD}</a>
            </div> 
           </div>
    )
}