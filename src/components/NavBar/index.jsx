import React, { useState } from 'react';
import { HiShoppingCart } from "react-icons/hi";
import './styles.css';
import logoNegro from '../../assets/logo/logoNegro.png';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

const NavBar = () => {

  return (
  <nav className="navbar navbar-expand-lg">
  <div className='nav-sale'>
    <h6>¡Envío gratis a todo el país y 6 cuotas sin interés!</h6>
  </div>
  <div className="container-fluid nav-pages">
    <Link className="navbar-brand" to="/"><img src={logoNegro} alt="Supernova Logo" width="210" height="40"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-pages" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/productos">Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/nuevo">Nuevo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/oferta">Oferta</Link>
        </li>
        <div className="widget-container">
          <CartWidget/>
        </div>
      </ul>
    </div>
  </div>
  </nav>
  )
}

export default NavBar