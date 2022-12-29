import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting = {"PRODUCTOS"}/>
    </div>
  )
}

export default App
