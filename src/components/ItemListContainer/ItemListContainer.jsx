import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router";
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
            <div>
            <Routes>
                    <Route path='/' element={<h2>Bienvenidos al sitio web</h2>}>
                    </Route>
                </Routes>
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