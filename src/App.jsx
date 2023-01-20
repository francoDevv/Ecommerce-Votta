// import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail/index.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}>
          </Route>

          <Route path='/category/:categoryId' element={<ItemListContainer />}>
          </Route>

          <Route path='/item/:itemId' element={<ItemDetail/>}>
          </Route>

        </Routes>
    </div>
  )
}

export default App
