/* eslint-disable no-unused-vars */

import React from "react"
import { Link } from "react-router-dom"


import { usecontextGlobal } from '../Components/utils/GlobalContext'

// eslint-disable-next-line react/prop-types
const Card = ({ dentist }) => {
  
  const {dentistState,dentistDispatch} = usecontextGlobal()
  
    const findFav = dentistState.dentistLike.find(fav => fav.id === dentist.id)
   
    const addFav = () => { 
      if(!findFav){
        dentistDispatch({type: 'DENTIST_LIKE', payload: dentist})
      } else {
        const filteredFavs = dentistState.dentistLike.filter(fav => fav.id !== dentist.id)
        dentistDispatch({type: 'DENTIST_DELETE', payload: filteredFavs})}
      }
  

  return (
    
      <div className="card">
        <Link key={dentist.id}to={'/detalle/' +dentist.id} style={{ textDecoration: 'none'}}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src=" /images/doctor.jpg" alt='Doctor' style={{width:'100%'}}/>
        <h1>{dentist.name}</h1>
        <h2 style={{textAlign:'center'}}>{dentist.username}</h2>
     
  
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        </Link>
        {/*<button onClick={addFav}>{findFav ? '🌟' : '⭐'} </button>*/}
        <button onClick={addFav}>{findFav ? '🌟' : '⭐'}</button>
      </div>   
      
      
     
 
  )
  }

export default Card