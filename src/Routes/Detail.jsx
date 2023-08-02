/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usecontextGlobal } from '../Components/utils/GlobalContext'


const Detail = () => {
    const {dentistState, dentistDispatch} = usecontextGlobal()
  
    const params = useParams()

   
    console.log(params.id)
   
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

    
    useEffect(() => {
        axios(url)
        .then(res => {
            console.log(res)
           dentistDispatch({type: 'GET_DENTIST', payload: res.data})
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    

  return (
 
    <div className='card-grid'>
   
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Website</td></tr>
        <tr>
        <td>
       <h1>{dentistState.dentist.name}</h1></td> 
       <td>
       <h2>{dentistState.dentist.email}</h2> </td>
       <td>
       <h3>{dentistState.dentist.website}</h3> </td>
       </tr>
       </table>
 
    </div>

  )
}

export default Detail