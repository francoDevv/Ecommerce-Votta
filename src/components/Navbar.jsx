import React from 'react'
import "./Navbar.css"
import logo from './logo.jpg'
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="./index.html">
                <img src={logo} alt="logo" className="logoHeader"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 margins">
                    <li className="nav-item margins">
                        <a className="nav-link active hvr-grow hvr-underline-from-left menu-letter" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active hvr-grow hvr-underline-from-left menu-letter" aria-current="page" href="./pages/chicos.html">Niños</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active hvr-grow hvr-underline-from-left menu-letter" aria-current="page" href="./pages/hombres.html">Hombres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active hvr-grow hvr-underline-from-left menu-letter" aria-current="page" href="./pages/mujeres.html">Mujeres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active hvr-grow hvr-underline-from-left menu-letter" aria-current="page" href="./pages/nosotros.html">Más Info</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active hvr-grow hvr-underline-from-left menu-letter" aria-current="page" href="./pages/contacto.html">Contacto</a>
                    </li>
                </ul>
                <div className='d-flex'>
                    <CartWidget/>
                    <form className="d-flex searchDesktop">
                        <input className="form-control me-2" id= "buscador" type="search" placeholder="Buscar" aria-label="Search"/>
                    </form>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;