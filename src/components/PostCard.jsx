
export default function PostCard(props) {
  return (
    <div>
        <p style={{
            border: '2px seagreen dashed',
            fontFamily: 'monospace',
            fontSize: 15,
            color: 'oldlace',
            padding: '2%',
            margin: '1%'
        }}>
           NAME: {props.name} 
            <br />
           TIME OF POST: {props.created}
            <br />
            <br />
           POST: {props.post}
        </p>
    </div>
  )
}
