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

    // const handleData = () => {
    //     const data = highScores.map((item) => {
    //         <div key={item.id}>
    //             {item.name}
    //             {item.score}
    //         </div>
    //     ))
    //     console.log(data)
    //     return data
    // }
  
  
  return (
   <>
    <div className='highScoresBox'> 
        {isLoading ? <p className='itLoads'>it loads for us</p> : <h3 className='scoreTitle'>high scores</h3>  }
        {error && <p>{error.message}</p> }
    </div>
     
    <div className='dataBox'>
        {highScores.map((item) => (
            <div key={item.id}>
               <p>{item.name}</p> 
                <p>{item.score}</p>
            </div>
        
        ))}
  
    </div>
   </>
  )
}
