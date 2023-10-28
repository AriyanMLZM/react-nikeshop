import React from 'react'
import './Body.css'
import {
  Route,
  Routes
} from 'react-router-dom'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Info from '../Info/Info'

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Info" element={<Info />} />
    </Routes>
  )
}

export default Body
