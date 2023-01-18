import React from 'react' 
import "./Card.css"

const Card = ({product}) => {
  return (
    <div className="cont">
        <div className="card">
          <img src = {product.image} className="imgHeigth" alt="..."/>
          <div className="card-body">
            <h5 className="card-title tituloFoto">{product.title}</h5>
            <p className="card-text">{product.price}</p>
            <a href="#" className="btn btn-primary">Ver Detalle</a>
          </div>
        </div>
    </div>
  )
}

export default Card