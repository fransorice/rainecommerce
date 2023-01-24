import React from 'react';
import './styles.css';
import logoNegro from '../../assets/logo/logoNegro.png';

const Footer = () => {
  return (
    <div className='footer'>
            <div className='footer-pages'>
                <h5>Secciones</h5>
                <ul>
                    <a href=""><li>Inicio</li></a>
                    <a href=""><li>Productos</li></a>
                    <a href=""><li>Nuevo</li></a>
                    <a href=""><li>Oferta</li></a>
                </ul>
            </div>
        <a href="/#"><img src={logoNegro} alt="Supernova Logo" width="210" height="40" className="footer-brand"/></a>
    </div>
  )
}

export default Footer