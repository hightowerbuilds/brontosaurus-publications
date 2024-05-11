import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import PostCard from './PostCard';


function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {
      let { data: messages, error } = await supabase
        .from('message_board')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) {
        throw error;
      }
      setMessages(messages);
    } catch (error) {
      console.error('Error fetching messages:', error.message);
    }

    };

    async function createMessage(tableName, data) {

   
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
  
  const handleInsert = () => { 
    createMessage('message_board', rowData)
    setNewMessage('');
    setNewName('')
  }

  const deleteMessage = async (id) => {
    try {
      const { error } = await supabase.from('message_board').delete().eq('id', id);
      if (error) {
        throw error;
      }
      setMessages(messages.filter((message) => message.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error.message);
    }
  };

  const renderPostCards = () => {
    return [...messages].map((message) => (
      <>
        <PostCard 
        key={message.id}  
        name={message.name} 
        created={message.created_at}
        post={message.post}
        delete={<button style={{
          borderRadius: 10, 
          padding: 7,
          color: 'seagreen'
        }} onClick={() => deleteMessage(message.id)}>delete</button>}
      />
      
      </>
    
      
    ));
  };



  return (
    <div style={{
      height: '100vh',
      width: '100%',
      
    }}>
     {isLoading && <p style={{fontSize: 56, fontFamily: 'cursive'}}>CURRENTLY LOADING</p>}
     {error && 911}

    <p style={{
      fontFamily: 'monospace',
      fontSize: 36,
      paddingLeft: 50,
      paddingTop: 10,
      marginTop: 10,
      borderTop: '3px seagreen solid'
    }}>MESSAGE BOARD</p>

     <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter your Name"
        style={{
          color: 'oldlace',
          borderRadius: 10,
          padding: 10,
          margin: 15,
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
          margin: 15,
          backgroundColor: 'darkgreen'
        }}
      />
       <button 
      
        onClick={handleInsert}
      style={{
        color: 'oldlace',
        fontSize: 16,
        borderRadius: 10,
        padding: 10,
        margin: 15,
      }}
      >
        {isLoading ? 'Adding message...' : 'Add Message'}
      </button>
  <p>
    {renderPostCards()}
  </p>
    </div>
  );
}

export default MessageBoard;