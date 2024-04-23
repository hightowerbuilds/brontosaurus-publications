
import { useState } from 'react'; 
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://winxgwbznakeweruqxyd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpbnhnd2J6bmFrZXdlcnVxeHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NDQxNjAsImV4cCI6MjAyOTMyMDE2MH0.DifHRS0YwZB3gs2MToQPp4l-mk4ev3ymoIdGMRqEqo4'
const supabase = createClient(supabaseUrl, supabaseKey);


export default function AddMessage() {
  const [newMessage, setNewMessage] = useState('');
  const [newName, setNewName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setIsLoading(true);
    setError(null); 

    try {
      const { data, error } = await supabase
        .from('message_board')
        .insert([{ post: newMessage }, { name: newName}]) 

      if (error) throw error;

      // Success! Clear input and update messages (if desired)
      setNewMessage(''); 
      setNewName('')
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter your Name"
      />
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding message...' : 'Add Message'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}
