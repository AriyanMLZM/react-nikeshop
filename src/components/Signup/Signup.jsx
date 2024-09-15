import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import Bg from '../Bg/Bg'
import { close } from '../../icones'

const Signup = () => {
  return (
    <section className="main-lg">
      <Bg />
      <section className="signin">
        <div className="top">
          <img src="icons8-nike-50.png" alt="" />
          <Link to="/">
            <img id="close-btn" src={close} alt="" />
          </Link>
        </div>
        <h2>Signup</h2>
        <form className="form">
          <div className="inputBx">
            <input type="text" required />
            <i>Username</i>
          </div>
          <div className="inputBx">
            <input type="password" required />
            <i>Password</i>
          </div>
          <Link to="/Login">
            <div className="links">
              Login
            </div>
          </Link>
          <div className="inputBx">
            <button type="submit">Signup</button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Signup
