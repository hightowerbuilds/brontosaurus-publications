import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import PostCard from './PostCard';
import AddMessage from './AddMessage';


function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    setIsLoading(true)
const { data, error } = await supabase
.from('message_board')
.select()
console.log(data, error)
setMessages(data)
setIsLoading(false)
setError(error)
    };

    fetchData();
  }, []);


  const renderPostCards = () => {
    return [...messages].reverse().map((message) => (
      <PostCard 
        key={message.id}  
        name={message.name} 
        created={message.created_at}
        post={message.post}
      />
    ));
  };

  return (
    <div style={{
      height: '100vh',
      width: '100%',
     
    }}>
     {isLoading && <p style={{fontSize: 56, fontFamily: 'cursive'}}>CURRENTLY LOADING</p>}
     {error && <p>there has been an error</p>}
   

  <AddMessage/>

   
  <p>
    {renderPostCards()}
  </p>
    </div>
  );
}

export default MessageBoard;