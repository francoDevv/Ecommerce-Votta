import React from 'react'
import Card from '../Item';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from '../../../db/firebase-config.js'
import { collection, getDocs } from "firebase/firestore";

const ItemList = () => {

    const [items, setItems] = useState([]);
    const itemsCollectionRef = collection(db, "items");
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true);

    const getItems =  async () => {
        if (categoryId === undefined) {
            const querySnapshot = await getDocs(itemsCollectionRef);
            const docs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setItems(docs);
            setLoading(false);
        } else {
            const querySnapshot = await getDocs(itemsCollectionRef);
            const docs = querySnapshot.docs.map((doc) =>  ({...doc.data(), id: doc.id}));
            const filteredItems = docs.filter((item) => item.category === categoryId);
            setItems(filteredItems);
            setLoading(false);
        }
    };

    useEffect(() => {
    getItems(); 
    }, [categoryId]);

    if (loading) {
        return <div className="d-flex justify-content-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
    }

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

export default ItemList