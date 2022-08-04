import React, { useContext } from 'react'
import BookDetail from './BookDetail'
import PrintList from './PrintList'
import { Storage } from './Storage'
import classes from './styles/Library.module.css'

function Library() {
    const detail = useContext(Storage)

  return (
    <div className={classes.library}>
      <div className={classes.inpbtn}>
        <input onChange={detail.inputHandler} placeholder='Search your book'/>
        <button onClick={detail.searchHandler}>Search</button>
        {/* <p>Total Records Found:{detail.data.length}</p> */}
      </div>
        <p>{detail.error}</p>
        {/* {!detail.xyz && <div>dfjdjdjdn</div>} */}
        {detail.loading? <img className={classes.loader} src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' alt=''/>:
        <PrintList />}
        {/* {console.log(detail.notFound)} */}
        {detail.notFound && <img src='https://vinoroc.com/static/app/images/no-record-found.76d6bd93c23b.gif' alt=''/>}
        {/* <BookDetail /> */}
    </div>
  )
}

export default Library