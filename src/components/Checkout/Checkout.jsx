import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link, useNavigate  } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './Checkout.css'

const Checkout = () => {

  const {cart, precioTotal} = useCartContext();
  const {limpiarCarrito} = useCartContext();

  const [inputName, setinputName] = useState('')
  const [inputLastName, setinputLastName] = useState('')
  const [inputEmail, setinputEmail] = useState('')
  const [inputConfirmEmail, setinputConfirmEmail] = useState('')
  const [inputPhone, setinputPhone] = useState('')

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const order = {
    buyer: {
      name: inputName,
      lastName: inputLastName,
      phone: parseInt(inputPhone),
      email: inputEmail,
      emailConfirm: inputConfirmEmail,
      date: new Date()
    },
    items: cart.map(item => ({id : item.id, title : item.title, price : item.price, quantity: item.quantity})),
    total: precioTotal()
    }
  
  const handleClick = (e) => {
    e.preventDefault();
    if (inputEmail === inputConfirmEmail) {
      setLoading(true)
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      return addDoc(ordersCollection, order)
      .then((data) => {
        console.log(data.id)
        limpiarCarrito();
        setLoading(false);
        return navigate(`/purchase/${data.id}`)
      });
    } else {
      alert('Los emails no coinciden')
    }
  }

  if (loading) {
    return <div className="d-flex justify-content-center">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
}

  if (cart.length === 0) {
    return (
      <div>
        <h1>Carrito vacio</h1>
        <Link to='/'>Comprar</Link>
      </div>
    )
  }
  
 
  return (
    <>
      {
        cart.map (item => <ItemCart key={item.id} item={item} />)
      }
      <div className='d-flex contenedor'>
        <div>
          <button className='btn btn-danger' onClick={() => limpiarCarrito()}>Limpiar Carrito</button>
        </div>
        <div className='totalCompra'>
          <h2>Total: ${precioTotal()}</h2>
        </div>
      </div>
      <div className='container'>
          <form className="row g-3">
              <div className="col-md-6">
                  <label className="form-label">Nombre</label>
                  <input type="text" className= "form-control" value={inputName} onChange={(e) => setinputName(e.target.value)} required/>
              </div>
              <div className="col-md-6">
                  <label className="form-label">Apellido</label>
                  <input type="text" className= "form-control " value={inputLastName} onChange={(e) => setinputLastName(e.target.value)} required/>
              </div>
              <div className="col-md-6">
                  <label className="form-label">Telefono</label>
                  <input type="text" className= "form-control" value={inputPhone} onChange={(e) => setinputPhone(e.target.value)} required/>
              </div>
              <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value={inputEmail} onChange={(e) => setinputEmail(e.target.value)} required/>
              </div>
              <div className="col-md-6">
                  <label className="form-label">Confirm Email</label>
                  <input type="email" className="form-control" value={inputConfirmEmail} onChange={(e) => setinputConfirmEmail(e.target.value)} required/>
              </div>
              <div className="col-12">
                <button className='btn btn-danger' onClick={handleClick}>Realizar Compra</button>
              </div>
          </form>
        </div>
    </>
  )
}

export default Checkout

/*
  name: inputName.value,
      lastName: inputLastName.value,
      email: inputEmail.value,
      confirmEmail: inputConfirmEmail.value,
*/