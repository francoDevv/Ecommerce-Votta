import React from "react";
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return(
        <div className="title">{greeting}</div>
    )
};

export default ItemListContainer