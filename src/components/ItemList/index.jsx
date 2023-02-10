import React from 'react'
import Card from '../Item';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {db} from '../../../db/firebase-config.js'
import { collection, getDocs } from "firebase/firestore";

const urlProducts = "https://fakestoreapi.com/products"


const ItemList = () => {

//   const [products, setProducts] = useState([])

//     const {categoryId} = useParams();

//     const getProducts = () => {
//         if (categoryId === undefined) {
//             axios.get(urlProducts).then((res) => setProducts(res.data));
//         } else {
//             const nuevaUrl = `https://fakestoreapi.com/products/category/${categoryId}`
//             axios.get(nuevaUrl).then((res) => setProducts(res.data));
//         }
//     }

//     useEffect(() =>{
//         getProducts();
//     }, [categoryId]);
  
    const [items, setItems] = useState([]);
    const itemsCollectionRef = collection(db, "items");

    const getItems =  async () => {
        const querySnapshot = await getDocs(itemsCollectionRef);
        const docs = querySnapshot.docs.map((doc) => doc.data());
        setItems(docs);
    };

    useEffect(() => {
    getItems(); 
    }, []);

    return (
        <div className="d-flex flex-wrap principal">
            {items.map((item) => {
                return(
                    <Card
                        key={item.id}
                        item={item}
                    />
                );
            })}
        </div>
    )
    }
{/* {products.map((product) => {
    return(
        <Card
            key={product.id}
            product={product}
        />
    );
})} */}

export default ItemList