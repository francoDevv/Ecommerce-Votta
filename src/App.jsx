// import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout.jsx'
import ItemDetail from './components/ItemDetail/index.jsx'
import ItemList from './components/ItemList/index.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import CartProvider from './context/CartContext.jsx'

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}>
          </Route>

          <Route path='/category/:categoryId' element={<ItemList />}>
          </Route>

          <Route path='/item/:itemId' element={<ItemDetail/>}>
          </Route>

          <Route path='/cart' element={<Checkout/>} >
          </Route>

          <Route path='*' 
          element=
          {<div>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
          </div>}>
          </Route>

        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
