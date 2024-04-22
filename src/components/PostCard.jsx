
export default function PostCard(props) {
  return (
    <div>
        <p style={{
            border: '2px seagreen dashed',
            fontFamily: 'monospace',
            padding: '2%'
        }}>
           NAME: {props.name} 
            <br />
           TIME OF POST: {props.created}
            <br />
            <br />
           POST: {props.post}
            <br />
            <br />
           NUMBER OF VIEWS: {props.views}
            <br />
           NUMBER OF REPLIES: {props.replies}
        </p>
    </div>
  )
}
