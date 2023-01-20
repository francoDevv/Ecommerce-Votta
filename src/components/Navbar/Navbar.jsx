import React from 'react'
import "./Navbar.css"
import logo from "../../../public/logo.jpg"
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand"> 
                <img src={logo} alt="logo" className="logoHeader"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 margins">
                    <li className="nav-item margins">
                        <Link to="/" className=' active hvr-grow hvr-underline-from-left menu-letter'>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/men's%20clothing" className=' active hvr-grow hvr-underline-from-left menu-letter'>Hombre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/jewelery" className=' active hvr-grow hvr-underline-from-left menu-letter'>Joyeria</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/electronics" className=' active hvr-grow hvr-underline-from-left menu-letter'>Electro</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/women's%20clothing" className=' active hvr-grow hvr-underline-from-left menu-letter'>Mujeres</Link>
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