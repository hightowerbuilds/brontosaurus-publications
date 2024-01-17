import './Sidebar.css'
import { useReducer } from 'react'
import ZineGallery from './ZineGallery'


const initialState = {
  zines: ''
}

function reducer (state, action){
  switch(action.type){
    case 'open-zines': 
    return { zines: <ZineGallery/> };
    case 'close-zines':
        return { zines: '' };
    default:
        return
  };
  
}




export default function Sidebar(){

const [ state, dispatch ] = useReducer(reducer, initialState)
const handleZinesButton = function (){state.zines === '' ?  dispatch({type: 'open-zines'}) : dispatch({ type: 'close-zines'})}



    return (
        <>
        <div className="menuContainer">
           <ul>
            <span onClick={handleZinesButton}>zines </span>
            <span> music </span>
            <span> essay </span>
            <span> shorts </span>
            <span> photo </span>
            <span> food </span>
           </ul>
        </div>

        {state.zines}
        </>
        
    )
}