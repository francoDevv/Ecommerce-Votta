import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ItemDetail.css"

const ItemDetail = () => {

    const [item, setItem] = useState([])

    const {itemId} = useParams();

    useEffect(() => {
       const urlItem = `https://fakestoreapi.com/products/${itemId}`
       axios.get(urlItem).then((res) => setItem(res.data));
    }, [itemId])

  return (
    <>
    <div>
        <div>
            <h2>{item.title}</h2>
        </div>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <p></p>
                <h5></h5>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail