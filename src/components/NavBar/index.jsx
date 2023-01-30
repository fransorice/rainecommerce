import React, { useState } from 'react';
import { HiShoppingCart } from "react-icons/hi";
import './styles.css';
import logoNegro from '../../assets/logo/logoNegro.png';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [contadorCarrito, setContadorCarrito] = useState(0);

  let carrito = () => {
    setContadorCarrito(contadorCarrito + 1);
  }

  return (
  <nav className="navbar navbar-expand-lg">
  <div className='nav-sale'>
    <h6>¡Envío grátis a todo el país y 6 cuotas sin interés!</h6>
  </div>
  <div className="container-fluid nav-pages">
    <Link className="navbar-brand" to="/"><img src={logoNegro} alt="Supernova Logo" width="210" height="40"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-pages" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Nuevo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Oferta</a>
        </li>
      </ul>
    </div>
  {<HiShoppingCart style={{height: 40, width: 40}}/>}
  <span>{contadorCarrito}</span>
  <button onClick={carrito}>Agregar producto</button>
  </div>
  </nav>
  )
}

export default NavBar