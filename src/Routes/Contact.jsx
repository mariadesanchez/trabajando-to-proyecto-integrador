// eslint-disable-next-line no-unused-vars
import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <>
   
    <div className='form' style={{textAlign:'center', borderRadius:'10px', border:'solid black 2px',width:'30vw',margin:'0 auto',padding:'20px'}}>
    <h1>Contact</h1>
    <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
     
   <Form/>
   </div>
  
  </>
  )
}

export default Contact
