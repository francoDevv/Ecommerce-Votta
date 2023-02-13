import React from 'react'
import { useCartContext } from '../../context/CartContext'
import "./CartWidget.css"

const CartWidget = () => {

  const {itemsTotal} = useCartContext();

  return (
    <div className="divCarrito">
        <i className="bi bi-cart2 carrito">
          <span>
            {itemsTotal() || ''}
          </span>
        </i>
    </div>
  )
}

export default CartWidget