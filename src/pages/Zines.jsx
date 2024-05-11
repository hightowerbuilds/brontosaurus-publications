import Covers from "../components/Covers";

export default function Zines() {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundColor: '#242424',
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

      <Covers />
      <br />
      

      <p style={{
        backgroundColor: 'inherit', 
        margin: 50,
      
      }}>
        Zines 
        <br /> 
        <br />
        It's not a palace, or riveted barge, infested den, nor raft of Medusa. It's not a thing.  
        <br />    
      </p>
      </p>
    </div>
  )
}
