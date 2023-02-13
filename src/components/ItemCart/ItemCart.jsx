import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './ItemCart.css'

const ItemCart = ({item}) => {

    const {borrarProducto} = useCartContext();

  return (
    <div className='itemCart'>
        <img src={item.image} className='itemImg' />
        <div>
            <p>Titulo: {item.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio u.:$ {item.price}</p>
            <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            <button onClick={() => borrarProducto(item.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart