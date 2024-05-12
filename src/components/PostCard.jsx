import './PostCard.css'

export default function PostCard(props) {
 

  return (
    <div>
        <p className="postCard">
           NAME: {props.name} 
            <br />
           TIME OF POST: {props.created}
            <br />
            <br />
           POST: {props.post}
           <br />
           <p className="postMessage">{props.delete}</p>
        </p>
    </div>
  )
}
