import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Storage = React.createContext();

export const Context = (props) => {
  const [data, setData] = useState("");
  const [book, setBook] = useState("");
  const [search, setSearch] = useState("ramayan");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [xyz,setXyz] = useState(false)
  const [bookisbn,setbookIsbn] =useState('9781934413043')
  const [isbn,setIsbn] = useState('')
  const detailpage = useNavigate();
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
        if (response.data.docs.length===0 && xyz) setNotFound(true);
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
  useEffect(()=>{
    const isbnData = async()=>{
        try{
            const res = await axios.get('https://openlibrary.org/api/books',{
                params:{
                    bibkeys:`ISBN:${bookisbn}`,
                    jscmd:'details',
                    format:'json'
                },
            });
            const k =Object.keys(res.data)[0]
            setIsbn(res.data[k])
            console.log(res.data[k])

        }catch{}
    }
    isbnData();
  },[bookisbn])
  const inputHandler = (event) => {
    setBook(event.target.value);
  };
  const searchHandler = () => {
    setSearch(book);
    setXyz(true)
    // setLoading(true)
  };
  const showBookDetail = (val) => {
    detailpage("/bookdetail");
    console.log(val)
    setbookIsbn(val)
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
        isbn:isbn,
        xyz:xyz
      }}
    >
      {props.children}
    </Storage.Provider>
  );
};
