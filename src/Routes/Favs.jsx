/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// eslint-disable-next-line no-unused-vars
import { usecontextGlobal } from '../Components/utils/GlobalContext'
function Favs() {
  const {dentistState}= usecontextGlobal()

  // const {dentistState} = usecontextGlobal()
// eslint-disable-next-line no-unused-vars

  return (
 
    

    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       
      {dentistState.dentistLike.map(dentist => <Card dentist={dentist} key={dentist.id}/>)}
      
       
      </div>
     
    </>
  );
   

}

export default Favs;
