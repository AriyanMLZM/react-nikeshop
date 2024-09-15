import React, { useState, useContext, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useParallax } from 'react-scroll-parallax'
import { cartimg } from '../../icones'
import DataContext from '../../context/DataContext'

const Header = () => {
  const [active, setActive] = useState('0')
  const { user, cart } = useContext(DataContext)

  const tP = useParallax({
    translateY: ['-600px', '500px']
  })

  const handleClick = (ind) => {
    if (ind === '2' && user === '') {
      setActive('0')
      sessionStorage.setItem('ap', '0')
    } else {
      setActive(ind)
      sessionStorage.setItem('ap', ind)
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem('ap') === null) {
      setActive('0')
    } else {
      setActive(sessionStorage.getItem('ap'))
    }
  }, [])

  return (
    <header id="main-header">
      <div id="left-triangle" className="triangle" />
      <div id="right-triangle" className="triangle" />
      <Link to="/">
        <button onClick={() => handleClick('0')} type="button" id="circle1" className={`circle ${active === '0' && 'active-div'}`}>
          Home
        </button>
      </Link>
      <div id="circle2" className="circle">
        <img src="imgs/logo.png" alt="" />
      </div>
      <Link to="/Info">
        <button onClick={() => handleClick('1')} type="button" id="circle3" className={`circle ${active === '1' && 'active-div'}`}>
          Info
        </button>
      </Link>
      <Link to="/Login">
        <div id="circle4" className="circle">
          {user && (
            <div className="info-div">
              {user}
              <br />
              <p>click to Log out</p>
            </div>
          )}
          {!user && (
            <div>Login</div>
          )}
        </div>
      </Link>
      <div ref={tP.ref} id="company-name">
        Nike Shop
      </div>
      <Link to="/Cart">
        <button onClick={() => handleClick('2')} type="button" id="cart" className={`circle ${active === '2' && 'active-div'}`}>
          <div id="count">{cart.length}</div>
          <img src={cartimg} alt="" />
        </button>
      </Link>
    </header>
  )
}

export default Header
