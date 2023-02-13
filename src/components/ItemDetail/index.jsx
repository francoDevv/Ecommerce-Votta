import React, { useEffect, useContext, useState } from 'react'
//import { CartContext } from '../../context/CartContext.jsx'
import { Link, useParams } from 'react-router-dom'
import "./itemDetail.css"
import db from '../../../db/firebase-config.js'
import { doc, getDoc } from "firebase/firestore";
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext.jsx'

const ItemDetail = () => {

    const {agregarProducto} = useCartContext();
    const [goToCart, setGoToCart] = useState(false)
    const [item, setItem] = useState([])
    const [quantity, setQuantity] = useState(0)
    const {itemId} = useParams();

    const getItem = async (itemId) => {
        const itemDocRef = doc(db, "items", itemId);
        const itemDoc = await getDoc(itemDocRef);
        if (itemDoc.exists()) {
            setItem(itemDoc.data());
        } else {
            return null;
        }
    }

    useEffect(() => {
        getItem(itemId);
    }, [itemId])

    const onAdd = (quantity) => {
        agregarProducto(item, quantity)
        setGoToCart(true);
    }

  return (
    <div>
        <div className='divTitle'>
            <h2>{item.title}</h2>
        </div>
        <div className='d-flex'>
            <img src={item.image} className="imageCard" alt="image of product" />
            <div>
                <h4 className='description'>{item.description}</h4>
                <h5 className='price'>${item.price}</h5>
                {
                    goToCart ? <Link to='/cart'><button className='btn btn-danger'>Terminar mi compra</button></Link> : <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail