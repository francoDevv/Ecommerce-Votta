// import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartScreen from './components/CartContext/CartContext.jsx'
import ItemDetail from './components/ItemDetail/index.jsx'
import ItemList from './components/ItemList/index.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}>
          </Route>

          <Route path='/category/:categoryId' element={<ItemList />}>
          </Route>

          <Route path='/item/:itemId' element={<ItemDetail/>}>
          </Route>

          <Route path='/cart' element={<CartScreen/>} >
          </Route>

        </Routes>
    </div>
  )
}

export default App
