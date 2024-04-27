
import { useState } from 'react'; 
import { supabase } from '../services/supabase';


export default function AddMessage() {
  const [newMessage, setNewMessage] = useState('');
  const [newName, setNewName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


    async function generateRow (tableName, data){

      // setIsLoading(true)

      try {
        const { error } = await supabase
        .from(tableName)
        .insert([data]);

        if (error) throw error;
        setIsLoading(false)
        console.log('success');

      } catch (error) {
        setError('error')
        console.log('error')
      }

    }

    const rowData = {
      name: newName,
      post: newMessage
    }

    const handleSubmit = () => {
    
      generateRow('message_board', rowData)

    }



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter your Name"
        style={{
          color: 'oldlace',
          borderRadius: 10,
          padding: 10,
          margin: 10,
          backgroundColor: 'darkgreen'
        }}
      />
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Enter your message"
        style={{
          color: 'oldlace',
          borderRadius: 10,
          padding: 10,
          margin: 10,
          backgroundColor: 'darkgreen'
        }}
      />
      <button 
      type="submit" 
      disabled={isLoading}
      style={{
        color: 'oldlace',
        fontSize: 16,
        borderRadius: 10,
        padding: 10
      }}
      >
        {isLoading ? 'Adding message...' : 'Add Message'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}
