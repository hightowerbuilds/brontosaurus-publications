import { useState, useEffect } from 'react';
// import { supabase } from '../services/supabase';
import { createClient } from '@supabase/supabase-js'
import PostCard from './PostCard';
import AddMessage from './AddMessage';
const supabaseUrl = 'https://winxgwbznakeweruqxyd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpbnhnd2J6bmFrZXdlcnVxeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NDQxNjAsImV4cCI6MjAyOTMyMDE2MH0.DifHRS0YwZB3gs2MToQPp4l-mk4ev3ymoIdGMRqEqo4'
const supabase = createClient(supabaseUrl, supabaseKey);



function MessageBoard() {
  const [messages, setMessages] = useState([]);
 // const [moreMessages, setMoreMessages] = useState([])
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
//setMoreMessages(data[1])
setIsLoading(false)
setError(error)
    };

    fetchData();
  }, []);


  const renderPostCards = () => {
    return messages.map((message) => (
      <PostCard 
        key={message.id}  
        name={message.name} 
        created={message.created_at}
        post={message.post}
        views={message.views}
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