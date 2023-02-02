import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='error-message'>
        <h2>¡Error!</h2>
        <h5>La página solicitada no fue encontrada</h5>
        <p>Disculpe las molestias</p>
        <Link to={"/"}>Volver al inicio</Link>
    </div>
  )
}

export default Error404