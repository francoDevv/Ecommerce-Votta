import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Card from "../Card";
import "./ItemListContainer.css"

const urlProducts = "https://fakestoreapi.com/products"

const ItemListContainer = ({greeting}) => {

    const [product, setProduct] = useState([])

    const {categoryId} = useParams();

    const getProducts = () => {
        if (categoryId === undefined) {
            axios.get(urlProducts).then((res) => setProduct(res.data));
        } else {
            const nuevaUrl = `https://fakestoreapi.com/products/category/${categoryId}`
            axios.get(nuevaUrl).then((res) => setProduct(res.data));
        }
    }

    useEffect(() =>{
        getProducts();
    }, [categoryId]);


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