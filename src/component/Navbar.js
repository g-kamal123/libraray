import { Switch } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Storage } from './Storage'
import classes from './styles/Navbar.module.css'

function Navbar() {
    const detail = useContext(Storage)
  return (
    <ul className={`${classes.navbar} ${detail.dark && classes.active}`}>
        <li>
          <Link to='/'><img src='https://openlibrary.org/static/images/openlibrary-logo-tighter.svg' alt=''/></Link>
        </li>
        <li>
        <div className={classes.inpbtn}>
        <input onChange={detail.inputHandler} placeholder='Search your book'/>
        <button onClick={detail.searchHandler} className={detail.dark && classes.active}>Search</button>
      </div>
        </li>
        <li className={classes.switch}>
        <Switch  defaultChecked color="warning" onChange={(event)=>detail.background(event.target.checked)}/>
        </li>
    </ul>
  )
}

export default Navbar