import DinoCity from '../images/cityBronto.jpg'
import BrontoHeader from '../images/bronto-header.jpg'

export default function Banner(){
    return (
        <div style={{
            display: 'flex',
            position: 'absolute',
            left: 150,
            height: 190,
            width: 790,
            marginTop: 12,
            backgroundColor: 'black',
            border: '1px seagreen dotted'
          }}>
            
          < img src={BrontoHeader} />
            <div style={{
                height: 190,
                width: 250,
                color: 'seagreen',
                backgroundColor: 'black',
                fontFamily: 'monospace',
              }}> 
              <img src={DinoCity} style={{
                height: 140,
                width: 230,
                marginTop: 15,
                marginLeft: 10
    
              }} />
              <p style={{
                paddingLeft: 10,
                backgroundColor: 'black'
              }}>"Probably, probably," - Many</p>
               </div>
          </div>

    )
}