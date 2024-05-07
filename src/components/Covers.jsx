import CoverTwo  from '../images/ZineTwoCover.jpg'

export default function Covers() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'inherit',
       margin: 30
    }}>
        <img 
            src={CoverTwo}
            style={{
                borderRadius: 3,
            }} />
    </div>
  )
}
