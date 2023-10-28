import React from 'react'
import './TrailMouse.css'
import { mouseTrail } from '../../utils'

const TrailMouse = () => {
  document.onmousemove = mouseTrail

  return (
    <>
      <div className="trail" id="c1" />
      <div className="trail" id="c2" />
      <div className="trail" id="c3" />
      <div className="trail" id="c4" />
    </>
  )
}

export default TrailMouse
