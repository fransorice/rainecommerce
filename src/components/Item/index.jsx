import React from 'react'
import './styles.css'

const Item = ({product}) => {
  return (
    <div className="card" style={{width: '18rem', height: '33rem'}}>
        <img src={product.img} className="card-img-top" alt="..." style={{width: '17rem', height: '20rem', marginLeft: '7px'}} />
        <div className="card-body">
            <h5 className="card-title">{product.titulo}</h5>
            <p className="card-text">{product.descripcion}</p>
            <p className='card-price'>${product.precio}</p>
            <a href="/#" className='btn btn-primary'>Comprar</a>
        </div>
    </div>
  )
}

export default Item