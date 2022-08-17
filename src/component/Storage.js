import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Storage = React.createContext();

export const Context = (props) => {
  const [dark,setDark] = useState(false)
  const [cover,setCover] = useState('')
  const [kidsarr,setKidsArr] = useState('')
  const [kdpage,setKdpage] = useState(1)
  const [rmpage,setRmpage] = useState(1)
  const [romancearr,setRomanceArr] = useState('')
  const [thrillerarr, setThrillerArr] = useState("");
  const [thrpage, setThrpage] = useState(1);
  const [data, setData] = useState("");
  const [book, setBook] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [xyz, setXyz] = useState(false);
  const [bookisbn, setbookIsbn] = useState("9781934413043");
  const [isbn, setIsbn] = useState("");
  const detailpage = useNavigate();


  const background =()=>{
    setDark(!dark)
  }
  const searchpage =(val)=>{
    setSearch(val)
    detailpage('/library')
  }
  const nextkd =()=>{
    setKdpage(kdpage+1)
  }
  const prevkd =()=>{
    if(kdpage>1)
    setKdpage(kdpage-1)
    else return
  }
  useEffect(()=>{
    const kids =async()=>{
      const response = await axios.get("https://openlibrary.org/search.json", {
        params: {
          q: "child book",
          mode: "ebooks",
          has_fulltext: true,
          limit: 4,
          page: kdpage,
        },
      });
      setKidsArr(response.data.docs)
    }
    kids()
  },[kdpage])
  const prevrm =()=>{
    if(rmpage>1)
    setRmpage(rmpage-1)
    else return
  }
  const nextrm =()=>{
    setRmpage(rmpage+1)
  }
  useEffect(()=>{
    const romance =async()=>{
      const response = await axios.get("https://openlibrary.org/search.json", {
        params: {
          q: "love story",
          mode: "ebooks",
          has_fulltext: true,
          limit: 4,
          page: rmpage,
        },
      });
      setRomanceArr(response.data.docs)
    }
    romance()
  },[rmpage])
  const prevthr = () => {
    if (thrpage > 1) setThrpage(thrpage - 1);
    else return;
  };
  const nextthr = () => {
    setThrpage(thrpage + 1);
  };
  useEffect(() => {
    const thrillers = async () => {
      const response = await axios.get("https://openlibrary.org/search.json", {
        params: {
          q: "thriller",
          mode: "ebooks",
          has_fulltext: true,
          limit: 4,
          page: thrpage,
        },
      });
      setThrillerArr(response.data.docs);
    };
    thrillers();
  }, [thrpage]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://openlibrary.org/search.json",
          {
            params: {
              q: search,
              mode: "ebooks",
              has_fulltext: true,
            },
          }
        );
        setData(response.data.docs);
        if (response.data.docs.length === 0 && xyz) setNotFound(true);
        else setNotFound(false);
        // console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    getData();
  }, [search]);
  // console.log(data)
  useEffect(() => {
    const isbnData = async () => {
      try {
        const res = await axios.get("https://openlibrary.org/api/books", {
          params: {
            bibkeys: `ISBN:${bookisbn}`,
            jscmd: "details",
            format: "json",
          },
        });
        const k = Object.keys(res.data)[0];
        setIsbn(res.data[k]);
        console.log(res.data[k]);
      } catch {}
    };
    isbnData();
  }, [bookisbn]);
  const inputHandler = (event) => {
    setBook(event.target.value);
  };
  const searchHandler = () => {
    setSearch(book);
    setXyz(true);
    detailpage('/library')
    // setLoading(true)
  };
  const showBookDetail = (val,cover) => {
    detailpage("/bookdetail");
    console.log(val);
    setbookIsbn(val);
    setCover(cover)
  };
  return (
    <Storage.Provider
      value={{
        inputHandler: inputHandler,
        book: book,
        error: error,
        searchHandler: searchHandler,
        data: data,
        showBookDetail: showBookDetail,
        loading: loading,
        notFound: notFound,
        isbn: isbn,
        xyz: xyz,
        thrillerarr: thrillerarr,
        nextthr: nextthr,
        prevthr: prevthr,
        romancearr:romancearr,
        nextrm:nextrm,
        prevrm:prevrm,
        kidsarr:kidsarr,
        nextkd:nextkd,
        prevkd:prevkd,
        searchpage:searchpage,
        cover:cover,
        background:background,
        dark:dark
      }}
    >
      {props.children}
    </Storage.Provider>
  );
};
