import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Books = () => {
    const [books, setBooks] = useState();
    let history = useHistory();
     
    useEffect(() => {
        axios.get(`http://localhost:8000/data/products`).then((res) =>{
            const responseBooks = res.data;
            setBooks(responseBooks);
        });
    }, 
    [])
    return (
        <>
        <div 
            onClick={() => history.push(`/book/${id}`)}
        >
            {books.map(book => {
                const { author, title, price, imageUrl, countInStock, id } = book;
                 return (
                     <div>
                         <p>{author}</p>
                     </div>
                 )
            })}
        </div>
        </>
    )
}

export default Books; 
