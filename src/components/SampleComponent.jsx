import { useState } from 'react';
import { supabase } from '../services/supabase';

export default function SampleComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (itemId) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('message_board')
        .delete()
        .eq('id', data.user_ID); 

      if (error) throw error;

      
      console.log('Item deleted successfully:', data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
        height: '100vh',
        width: '100%'
    }}>
     
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => handleDelete(item.id)} disabled={isLoading}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isLoading && <p>Deleting...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
