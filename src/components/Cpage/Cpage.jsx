import React, { useState, useContext, useEffect } from 'react'
import './Cpage.css'
import { v4 as uuidv4 } from 'uuid'
import DataContext from '../../context/DataContext'
import { countPage } from '../../utils'

const Cpage = ({ activePage, changePage }) => {
  const { items } = useContext(DataContext)
  const [page, setPage] = useState(0)
  useEffect(() => {
    setPage(countPage(items.length, 12))
  }, [items])
  return (
    <div className="pages-wrapper">
      {new Array(page).fill(0).map((el, ind) => (
        <button key={uuidv4()} type="button" onClick={() => { changePage(ind) }} className={`${activePage === ind && 'active-page'}`}>{ind + 1}</button>
      ))}
    </div>
  )
}

export default Cpage
