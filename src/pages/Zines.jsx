import Covers from "../components/Covers";

export default function Zines() {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundColor: 'darkgray',
      border: '2px maroon dotted', 
      display: 'flex',
      justifyContent: 'center'
      
    }}>
      <p style={{
        backgroundColor: 'inherit',
        fontFamily: 'monospace',
        fontSize: 22,
        marginTop: 30,
      }}>
      Zines
      <br />
      <Covers />
    
      </p>
    
   
    </div>
  )
}
