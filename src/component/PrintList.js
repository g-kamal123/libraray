import React, { useContext } from 'react'
import { Storage } from './Storage'
import classes from './styles/PrintList.module.css'

function PrintList() {
    const detail = useContext(Storage)
  return (
    <ul className={classes.searchLists}>
      {detail.data.length>0 && detail.data.map((item)=>
      <li onClick={()=>detail.showBookDetail(item.isbn && item.isbn[0])}>
      <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}alt=''/>
      <div className={classes.content}>
          <span className={classes.bookname}>{item.title}</span>
      <p className={classes.writer}>by&nbsp;{item.author_name && item.author_name.map((it)=>
      <span>{it}&nbsp;</span>)}</p>
      <span>first published in {item.first_publish_year}</span>
      <span>edition {item.edition_count}</span>
      </div>
      </li>)}
        
    </ul>
  )
}

export default PrintList