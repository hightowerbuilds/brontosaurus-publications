
import DropMenu from "./DropMenu";
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
            titleBarOne={'______history______'}
            titleBarTwo={'______technology______'}
            />
        </div>
    )
}

function ListEssays(props){
    return(
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: 2,
            
            backgroundColor: '#242429'
        }}>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429'
           }}>
            {props.titleBarOne}
           </div>
           <div style={{
             border: '1px seagreen dotted',
             backgroundColor: '#242429'
           }}>
            {props.titleBarTwo}
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
          <div>
           
           <DropMenu/>
      
           <div style={{
            height: 300,
            width: 200,
            position: 'absolute',
            left: 202,
            top: 27,
            border: '1px black dotted',
            borderRadius: 3

           }}>
            ...technology ....component goes here.
           </div>
           <div style={{
            height: 300,
            width: 198,
            position: 'absolute',
            left: 422,
            top: 27,
            border: '1px black dotted',
            borderRadius: 3

           }}>
             ...next component goes here.
           </div>
           <div style={{
            height: 300,
            width: 132,
            position: 'absolute',
            left: 638,
            top: 27,
            border: '1px black dotted',
            borderRadius: 3

           }}>
            ...next component goes here.
           </div>
          </div>
        </div>
    )
}