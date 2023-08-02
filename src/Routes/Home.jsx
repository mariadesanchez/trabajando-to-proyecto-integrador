// eslint-disable-next-line no-unused-vars
import React from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import { usecontextGlobal } from '../Components/utils/GlobalContext.jsx'
import { useEffect } from 'react'




const Home = () => {
  // eslint-disable-next-line no-unused-vars
  // const {dentistState} = usecontextGlobal()
  const {dentistState, dentistDispatch} = usecontextGlobal()

  const url = `https://jsonplaceholder.typicode.com/users`
  useEffect(() => {
    axios(url)
    .then(res => {
        console.log(res)
       dentistDispatch({type: 'GET_LIST', payload: res.data})
    })
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [url])
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistState.dentistsList.map(dentist => (<Card dentist={dentist} key ={dentist.id}/>))}
      </div>
    </main>
  )
}

export default Home
