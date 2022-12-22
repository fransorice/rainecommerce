import React from 'react'
import { HiShoppingCart } from "react-icons/hi";

const NavBar = () => {
  return (
  <nav class="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#"><img src="https://o.remove.bg/downloads/b017f53e-eeb8-46e4-851d-4d16e628d635/logorain-removebg-preview.png" alt="Bootstrap" width="180" height="120"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Nuevo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Proximamente</a>
        </li>
      </ul>
    </div>
  </div>
  <HiShoppingCart style={{height: 40, width: 40}}/>
  <span>5</span>
  </nav>
  )
}

export default NavBar