/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Route, Routes
} from 'react-router-dom'
import itemsPack from './items.json'
import DataContext from './context/DataContext'
import {
  Header,
  Footer,
  Body,
  Login,
  Signup,
  TrailMouse
} from './components'

const App = () => {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])
  const [user, setUser] = useState('')
  const [refresh, setRefresh] = useState(0)
  const [pflag, setPflag] = useState(true)

  window.onresize = () => {
    if (window.innerWidth > 600) setPflag(true)
    if (window.innerWidth < 600) setPflag(false)
  }

  const laodItems = async () => {
    setItems(itemsPack)
  }

  const handleUser = (name) => {
    setUser(name)
    sessionStorage.setItem('user', name)
  }

  const handleAddCart = async (data) => {
    setCart([...cart, data])
  }

  const handleRemoveCart = async (data) => {
    const newCart = cart
    newCart.splice(cart.findIndex((item) => item.title === data.title), 1)
    setCart(newCart)
    setRefresh(refresh + 1)
  }

  useEffect(() => {
    laodItems()
    if (sessionStorage.getItem('user') === null) {
      handleUser('Ariyan')
    } else {
      handleUser(sessionStorage.getItem('user'))
    }
    if (window.innerWidth > 600) setPflag(true)
    if (window.innerWidth < 600) setPflag(false)
  }, [])

  return (
    <DataContext.Provider value={{
      items,
      user,
      cart,
      pflag,
      funcs: { handleUser, handleAddCart, handleRemoveCart }
    }}
    >
      <Routes>
        <Route
          path="*"
          element={(
            <>
              <Header />
              <Body />
              <Footer />
            </>
          )}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <TrailMouse />
      <img className="background-img" src="imgs/Bg.png" alt="" />
    </DataContext.Provider>
  )
}

export default App;
