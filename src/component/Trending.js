import React, { useContext } from "react";
import { Storage } from "./Storage";
import classes from './styles/Trending.module.css' 

function Trending() {
    const detail = useContext(Storage)
  return (
    <div>
      <div className={`${classes.thriller} ${detail.dark && classes.active}`}>
        <p onClick={()=>detail.searchpage('thriller')}>Thrillers</p>
        <div className={`${classes.images} ${detail.dark && classes.active}`}>
          <i class="fa-solid fa-arrow-left" onClick={detail.prevthr}></i>
            {detail.thrillerarr.length > 0 && detail.thrillerarr.map((item)=><img
            src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
            alt=""
            onClick={() => detail.showBookDetail(item.isbn && item.isbn[0],item.cover_i)}
          />)}
          <i class="fa-solid fa-arrow-right" onClick={detail.nextthr}></i>
        </div>
      </div>
      <div className={`${classes.thriller} ${detail.dark && classes.active}`}>
        <p onClick={()=>detail.searchpage('love story')}>Romance</p>
        <div className={`${classes.images} ${detail.dark && classes.active}`}>
          <i class="fa-solid fa-arrow-left" onClick={detail.prevrm}></i>
            {detail.romancearr.length > 0 && detail.romancearr.map((item)=><img
            src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
            alt=""
            onClick={() => detail.showBookDetail(item.isbn && item.isbn[0],item.cover_i)}
          />)}
          <i class="fa-solid fa-arrow-right" onClick={detail.nextrm}></i>
        </div>
      </div>
      <div className={`${classes.thriller} ${detail.dark && classes.active}`}>
        <p onClick={()=>detail.searchpage('child book')}>Kids</p>
        <div className={`${classes.images} ${detail.dark && classes.active}`}>
          <i class="fa-solid fa-arrow-left" onClick={detail.prevkd}></i>
            {detail.kidsarr.length > 0 && detail.kidsarr.map((item)=><img
            src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
            alt=""
            onClick={() => detail.showBookDetail(item.isbn && item.isbn[0],item.cover_i)}
          />)}
          <i class="fa-solid fa-arrow-right" onClick={detail.nextkd}></i>
        </div>
      </div>
    </div>
  );
}

export default Trending;
