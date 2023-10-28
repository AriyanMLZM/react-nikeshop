import React, { useContext } from 'react'
import './Cart.css'
import { v4 as uuidv4 } from 'uuid'
import DataContext from '../../context/DataContext'

const Cart = () => {
  const { cart, funcs } = useContext(DataContext)

  return (
    <section id="st" className="left-body sub-body">
      {cart.length === 0 && <div className="msg-cart">Cart is empty!</div>}
      {cart.length > 0 && cart.map((el) => (
        <div key={uuidv4()} className="item-left item">
          <div key={uuidv4()} className="item-info">
            <h2 key={uuidv4()}>{el.title}</h2>
            <h3 key={uuidv4()}>{el.price}</h3>
          </div>
          <button key={uuidv4()} onClick={() => funcs.handleRemoveCart(el)} className="ar-btn remove" type="button">X</button>
          <img key={uuidv4()} src={el.srcImg} alt="" />
        </div>
      ))}
    </section>
  )
}

export default Cart
