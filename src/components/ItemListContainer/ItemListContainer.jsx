import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import "./ItemListContainer.css"

const urlProducts = "https://fakestoreapi.com/products"

const ItemListContainer = ({greeting}) => {

    const [product, setProduct] = useState([])

    const getProducts = () => {
        axios.get(urlProducts).then((res) => setProduct(res.data));
    }

    useEffect(() =>{
        getProducts();
    }, []);


    return(
        <div className="container">
            <div className="title">
                {greeting}
            </div>
            <div className="d-flex flex-wrap principal">
                {product.map((product) => {
                    return(
                        <Card
                            key={product.id}
                            product={product}
                        />
                    );
                })}
            </div>
        </div>

    )
};

export default ItemListContainer