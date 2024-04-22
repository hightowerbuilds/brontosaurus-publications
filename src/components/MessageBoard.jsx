import { useState, useEffect } from 'react';
// import { supabase } from '../services/supabase';
import { createClient } from '@supabase/supabase-js'
import PostCard from './PostCard';
const supabaseUrl = 'https://winxgwbznakeweruqxyd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpbnhnd2J6bmFrZXdlcnVxeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NDQxNjAsImV4cCI6MjAyOTMyMDE2MH0.DifHRS0YwZB3gs2MToQPp4l-mk4ev3ymoIdGMRqEqo4'

const supabase = createClient(supabaseUrl, supabaseKey);



function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [moreMessages, setMoreMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    setIsLoading(true)
const { data, error } = await supabase
.from('message_board')
.select()
console.log(data[0], data[1], error)
setMessages(data[0])
setMoreMessages(data[1])
setIsLoading(false)
setError(error)
    };

    fetchData();
  }, []);

  return (
    <div style={{
      height: '100vh',
      width: '100%'
    }}>
     {isLoading && <p>it is still loading</p>}
     {error && <p>there has been an error</p>}
   
    <PostCard 
    name={messages.name}
    created={messages.created_at}
    post={messages.post}
    views={messages.views}
    replies={messages.replies}  />

<PostCard 
    name={moreMessages.name}
    created={moreMessages.created_at}
    post={moreMessages.post}
    views={moreMessages.views}
    replies={moreMessages.replies}  />
    </div>
  );
}

export default MessageBoard;