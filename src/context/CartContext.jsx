import React, { useState } from 'react'

export const CartContext = React.createContext([]);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const agregarProducto = (product, quantity) => {
        if (existeCarrito(product.id)) {
            setCart(cart.map(product => {
                return product.id === product.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        } else{
                setCart([...cart, {...product, quantity}]);
            }
    }

    const limpiarCarrito = () => setCart([]);
    
    const existeCarrito = (id) => cart.find((product) => product.id === id) ? true : false;

    const borrarProducto = (id) => setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider value={{
        limpiarCarrito,
        existeCarrito,
        borrarProducto,
        agregarProducto,
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider