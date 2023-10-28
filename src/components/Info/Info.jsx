import React from 'react'
import './Info.css'

const Info = () => (
  <section className="info-sec">
    <div className="outer-div">
      <div className="inner-div">
        <p>
          This is a parallax website that
          <br />
          works with the scrolling of the user.
        </p>
        <p>
          <strong>Frontend:</strong>
          {' '}
          react js
          <br />
          <strong>Backend:</strong>
          {' '}
          {' '}
          node and epress js
          <br />
          <strong>Database:</strong>
          {' '}
          {' '}
          mySql
          <br />
          <br />
          <br />
          Contact info:
          {' '}
          <a href="tel:09175894212">09175894212</a>
        </p>
      </div>
    </div>
  </section>
)

export default Info
