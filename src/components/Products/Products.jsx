import React, { useState, useContext } from 'react'
import './Products.css';
import { Parallax } from 'react-scroll-parallax'
import { v4 as uuidv4 } from 'uuid'
import Cpage from '../Cpage/Cpage'
import DataContext from '../../context/DataContext'

const Products = () => {
  const [activePage, setActivePage] = useState(0)
  const {
    items, cart, funcs, pflag
  } = useContext(DataContext)

  const changePage = (num) => {
    setActivePage(num)
  }
  const checkCart = (el) => {
    return cart.findIndex((item) => item.title === el.title)
  }

  return (
    <>
      <Cpage activePage={activePage} changePage={changePage} />
      <section className="body-sec">
        <section className="left-body sub-body">
          {items.slice(activePage * 12, activePage * 12 + 6).map((el) => (
            <Parallax key={uuidv4()} translateX={pflag && ['-400px', '0px']} easing="easeOutCubic">
              <div key={uuidv4()} className="item-left item">
                <div key={uuidv4()} className="item-info">
                  <h2 key={uuidv4()}>{el.title}</h2>
                  <h3 key={uuidv4()}>{el.price}</h3>
                </div>
                {checkCart(el) > -1 && <button key={uuidv4()} onClick={() => funcs.handleRemoveCart(el)} className="ar-btn remove" type="button">X</button>}
                {checkCart(el) === -1 && <button key={uuidv4()} onClick={() => funcs.handleAddCart(el)} className="ar-btn add" type="button">+</button>}
                <img key={uuidv4()} src={el.srcImg} alt="" />
              </div>
            </Parallax>
          ))}
        </section>
        <section className="right-body sub-body">
          {items.slice(activePage * 12 + 6, activePage * 12 + 12).map((el) => (
            <Parallax key={uuidv4()} translateX={pflag && ['400px', '0px']} easing="easeOutCubic">
              <div key={uuidv4()} className="item-right item">
                <img key={uuidv4()} src={el.srcImg} alt="" />
                {checkCart(el) > -1 && <button key={uuidv4()} onClick={() => funcs.handleRemoveCart(el)} className="ar-btn remove" type="button">X</button>}
                {checkCart(el) === -1 && <button key={uuidv4()} onClick={() => funcs.handleAddCart(el)} className="ar-btn add" type="button">+</button>}
                <div key={uuidv4()} className="item-info">
                  <h2 key={uuidv4()}>{el.title}</h2>
                  <h3 key={uuidv4()}>{el.price}</h3>
                </div>
              </div>
            </Parallax>
          ))}
        </section>
      </section>
      <Cpage activePage={activePage} changePage={changePage} />
    </>
  )
}

export default Products;
