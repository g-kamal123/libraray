import React, { useContext, useEffect, useState } from "react";
import { Storage } from "./Storage";
import classes from "./styles/BookDetail.module.css";

function BookDetail() {
  const detail = useContext(Storage);

  return (
    <div className={`${classes.bookdetail} ${detail.dark && classes.active}`}>
      <div className={`${classes.imagecontent} ${detail.dark && classes.active}`}>
        <img
          src={`https://covers.openlibrary.org/b/id/${detail.cover}-L.jpg`}
          alt=""
        />
        <a href={detail.isbn && detail.isbn?.info_url} target="_blank">
          Complete_info
        </a>

        <a href={detail.isbn && detail.isbn?.preview_url} target="_blank">
          Preview
        </a>
        <a
          href={`https://books.google.co.in/books?id=${
            detail.isbn?.details?.identifiers?.google === undefined
              ? "#"
              : detail.isbn.details.identifiers.google[0]
          }`}
          target="_blank"
        >
          Google Book
        </a>
      </div>
      <div className={`${classes.textcontent} ${detail.dark && classes.active}`}>
        <p>
          An edition of {detail.isbn?.details?.title} (
          {detail.isbn?.details?.publish_date})
        </p>
        <h1>{detail.isbn?.details?.title}</h1>
        <span>{detail.isbn?.details?.subtitle}</span>
        <span>{detail.isbn?.details?.edition_name}</span>
        <hr />
        <div className={classes.publishinfo}>
          <p>
            Publish Date <br />
            {detail.isbn?.details?.publish_date}
          </p>
          <p>
            Publisher
            <br />
            {detail.isbn?.details?.publishers === undefined
              ? "_"
              : detail.isbn.details.publishers[0]}
          </p>
          <p>
            Language
            <br />
            English
          </p>
          <p>
            Pages
            <br />
            {detail.isbn?.details?.number_of_pages}
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default BookDetail;
