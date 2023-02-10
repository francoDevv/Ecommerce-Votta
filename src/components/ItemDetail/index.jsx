import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { useParams } from 'react-router-dom'
import "./itemDetail.css"

const ItemDetail = () => {

    const [item, setItem] = useState([])

    const {itemId} = useParams();

    useEffect(() => {
       const urlItem = `https://fakestoreapi.com/products/${itemId}`
       axios.get(urlItem).then((res) => setItem(res.data));
    }, [itemId])

    // const [count, setCount] = useState(0)

    // const nombre = useContext(CartContext);
    // console.log('nombre:', nombre);

  return (
    <div>
        <div>
            <h2>{item.title}</h2>
        </div>
        <div className='d-flex'>
            <img src={item.image} className="imageCard" alt="image of product" />
            <div>
                <h4>{item.description}</h4>
                <h5>{item.price}</h5>
                {/* <button type="button" className="btn btn-danger" onClick={()=> setCount(count + 1)}>Agregar al carrito</button>
                <p>Clickeaste {count} veces el boton</p> */}
            </div>
        </div>
    </div>
  )
}

export default ItemDetail