import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Purchase = () => {

    const {id} = useParams()

  return (
    <div className='d-flex flex-column align-items-center'>
        <h1>Compra realizada con éxito</h1>
        <h2>Su codigo de orden es {id}</h2>
        <Link to={'/'}>Volver al Inicio</Link>
    </div>
  )
}

export default Purchase