import './HighScores.css'

import { useState, useEffect } from 'react'
import { supabase } from '../services/supabase'

export default function HighScores() {


    const [ highScores, setHighScores ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => { fetchData(); }, [])

    const fetchData = async () => {

        try {
            const { data: highScores, error } = await supabase
            .from('high_scores')
            .select('*')
            .order('created_at', { ascending: false });
            console.log()
            if (error) {
                throw error
            }
            setHighScores(highScores);
        } catch (error) {
            setError('error')
            console.log('error', error.message)
        } finally {
            setIsLoading(false)
        }
    }

  
  return (
   
    <div className='highScoresBox'> 
        {isLoading ? <p className='itLoads'>it puts the loading on its skin</p> : <h3 className='scoreTitle'>HIGH Scores</h3>  }
        {error && <p>{error.message}</p> }
 
     
    <div className='dataBox'>
        <br />
        <p style={{ border: '2px oldlace solid', width: 'fit-content', fontSize: 92}}>  SNAKE</p>
        {highScores.map((item) => (
            <div style={{  width: 'fit-content'}} key={item.id}>
               <p>{item.name}: {item.score}</p> 
                
            </div>
        
        ))}
  
    </div>
    </div>
   
  )
}
