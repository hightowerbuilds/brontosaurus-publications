import './Sidebar.css'
import { useReducer } from 'react'
import ZineGallery from './ZineGallery'
import Banner from './Banner';

const COMPONENTS = {
  banner: <Banner />,
  gallery: <ZineGallery/>
}

const initialState = {
  zines: COMPONENTS.banner
}

function reducer (state, action){
  switch(action.type){
    case 'open-zines': 
    return { zines: COMPONENTS.gallery };
    case 'close-zines':
        return { zines: COMPONENTS.banner };
    default:
        return
  };
  
}




export default function Sidebar(){

const [ state, dispatch ] = useReducer(reducer, initialState)
const handleZinesButton = function (){state.zines === COMPONENTS.banner ?  dispatch({type: 'open-zines'}) : dispatch({ type: 'close-zines'})}



    return (
        <>
        <div className="menuContainer">
           <ul>
            <p className='home'>homes</p>
            <p className='zines' onClick={handleZinesButton} >zines </p>
            <p className='music'> music </p>
            <p className='essay'> essay </p>
            <p className='shorts'> shorts </p>
            <p className='photo'> photo </p>
            <p className='food'> food </p>
           </ul>
        </div>

        {state.zines}
        </>
        
    )
}