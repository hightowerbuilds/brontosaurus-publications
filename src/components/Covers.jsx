import CoverTwo  from '../images/ZineTwoCover.jpg'

export default function Covers() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'inherit',
       
    }}>
        <img 
            src={CoverTwo}
            style={{
                borderRadius: 3,

            }} />
    </div>
  )
}
