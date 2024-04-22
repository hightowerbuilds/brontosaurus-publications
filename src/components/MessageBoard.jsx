import { useState, useEffect } from 'react';
// import { supabase } from '../services/supabase';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://winxgwbznakeweruqxyd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpbnhnd2J6bmFrZXdlcnVxeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NDQxNjAsImV4cCI6MjAyOTMyMDE2MH0.DifHRS0YwZB3gs2MToQPp4l-mk4ev3ymoIdGMRqEqo4'

const supabase = createClient(supabaseUrl, supabaseKey);



function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
     
const { data, error } = await supabase
.from('message_board')
.select()
console.log(data, error)
setMessages(data[0])
    };

    fetchData();
  }, []);

  return (
    <div style={{
      height: '100vh',
      width: '100%'
    }}>
      <p>
      {messages.name} 
      <br />
    {messages.id}
    <br />
    {messages.post}
    <br />
    {messages.views}
    <br />
    {messages.replies}
      </p>
    
    </div>
  );
}

export default MessageBoard;