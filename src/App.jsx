// import { useState } from 'react'
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting = {"PRODUCTOS"}/>
    </div>
  )
}

export default App
