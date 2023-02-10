import React from 'react' 
import { NavLink } from 'react-router-dom'
import "./Card.css"

const Card = ({item}) => {

  const itemId = item.id

  return (
    <div className="cont">
        <div className="card">
          <img src = {item.image} className="imgHeigth" alt="..."/>
          <div className="card-body">
            <h5 className="card-title tituloFoto">{item.title}</h5>
            <p className="card-text">${item.price}</p>
            <NavLink to={`/item/${itemId}`}>
              <button className="btn btn-primary">Ver Detalle</button>
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Card