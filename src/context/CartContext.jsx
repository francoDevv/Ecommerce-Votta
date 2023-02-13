import React, { useContext, useState } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const precioTotal = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0).toFixed(2);
    }

    const itemsTotal = () => cart.reduce((acumulador, item) => acumulador + item.quantity, 0);

    const agregarProducto = (item, quantity) => {
        if (existeCarrito(item.id)) {
            setCart(cart.map(itemDetalle => {
                return itemDetalle.id === item.id ? {...itemDetalle, quantity: itemDetalle.quantity + quantity} : itemDetalle
            }));
        } else{
                setCart([...cart, {...item, quantity}]);
            }
    }

    const limpiarCarrito = () => setCart([]);
    
    const existeCarrito = (id) => cart.find((item) => item.id === id) ? true : false;

    const borrarProducto = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <CartContext.Provider value={{
        limpiarCarrito,
        existeCarrito,
        borrarProducto,
        agregarProducto,
        precioTotal,
        itemsTotal,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider