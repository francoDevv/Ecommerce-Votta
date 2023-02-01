import React from 'react'
import Card from '../Item';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const urlProducts = "https://fakestoreapi.com/products"


const ItemList = () => {

  const [products, setProducts] = useState([])

    const {categoryId} = useParams();

    const getProducts = () => {
        if (categoryId === undefined) {
            axios.get(urlProducts).then((res) => setProducts(res.data));
        } else {
            const nuevaUrl = `https://fakestoreapi.com/products/category/${categoryId}`
            axios.get(nuevaUrl).then((res) => setProducts(res.data));
        }
    }

    useEffect(() =>{
        getProducts();
    }, [categoryId]);
  
  return (
    <div className="d-flex flex-wrap principal">
        {products.map((product) => {
            return(
                <Card
                    key={product.id}
                    product={product}
                />
            );
        })}
    </div>
  )
}

export default ItemList