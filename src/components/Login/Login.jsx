import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Bg from '../Bg/Bg'
import closeImg from '../../icones/🦆 icon _action cancel close delete exit remove x icon_.png'

const Login = () => {
  return (
    <section className="main-lg">
      <Bg />
      <section className="signin">
        <div className="top">
          <img src="icons8-nike-50.png" alt="" />
          <Link to="/">
            <img id="close-btn" src={closeImg} alt="" />
          </Link>
        </div>
        <h2>Login</h2>
        <div className="msg">
          Welcome
        </div>
        <form className="form">
          <div className="inputBx">
            <input type="text" required />
            <i>Username</i>
          </div>
          <div className="inputBx">
            <input type="password" required />
            <i>Password</i>
          </div>
          <Link to="/Signup">
            <div className="links">
              Signup
            </div>
          </Link>
          <div className="inputBx">
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Login
