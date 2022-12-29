import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="divCarrito">
        <a href="#"><i className="bi bi-cart2 carrito"></i></a>
        <sub className='subCarrito'>4</sub>
    </div>
  )
}

export default CartWidget