

export default function HeadlineArticle(props){
    return(

        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            position: 'absolute',
            width: 790,
            left: 60,
            top: props.Position
           }}> 
            <h2 style={{
              position: 'absolute',
              width: 700,
              left: 150,
              
            }}>{props.Title}</h2>
            <p style={{
              position: 'absolute',
              width: 800,
              left: 88,
              top: 35,
            }}>{props.Article}</p>
           
        
           </div>
    )
}