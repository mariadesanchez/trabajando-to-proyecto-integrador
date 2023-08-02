/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'
import { useEffect } from 'react'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { usecontextGlobal } from '../Components/utils/GlobalContext'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import Card from '../Components/Card'
const Navbar = () => {
  const navigate = useNavigate()

 // eslint-disable-next-line no-unused-vars
 const {dentistDispatch, dentistState} = usecontextGlobal()

 const [search, setSearch] = useState('')

 

 const handleInputChange = (event) => {
  setSearch(event.target.value);

}

const handleOnClik = () => {

 const url = `https://jsonplaceholder.typicode.com/users`
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios(url)
    .then(res => {
      
     const result = dentistDispatch({type: 'GET_LIST', payload: res.data})
     result.map(dentist => (
      console.log(dentist.name)
     ))
      
    })
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])}

  return (
    
    <div className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <div className='links' style={{margin:'24px'}} >
            <h4 onClick={() => navigate(-1)}>↩Back</h4>
            <Link to={routes.home}><h4 className='link' style={{margin:'24px'}}>Home</h4></Link>
            <Link to={routes.contact}><h4 className='link' style={{margin:'24px'}}>Contact</h4></Link>
            <Link to={routes.favs}><h4 className='link'style={{margin:'24px'}}>Favs</h4></Link>
            
            <input type="text"    onBlur={handleInputChange} />
            
            <button onClick={handleOnClik}style={{width:'124px'}}   ></button>
            <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      
        {dentistState.dentistsList.filter(dentist =>  dentist.name.toLowerCase().includes(search.toLowerCase()))
  .
 
map(dentist => (
    <Card dentist={dentist} key={dentist.id} />
  ))
}
      </div>
        
           
      </div>
    </div>
  )
}

export default Navbar

