import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = () => {
    const { id } = useParams(); 

    const [bookDetails, setBookDetails] = useState();
        let navigate = useNavigate();
     
    useEffect(() => {
        axios.get(`http://localhost:8000/data/products/${id}`).then((res) =>{
            const responseBook = res.data;
            setBookDetails(responseBook); 
        });
    }, 
    []);

    const { author, title, price, imageUrl, countInStock, id: bookId } = bookDetails || {};

    return (
        <div>
            {bookDetails ? (<div></div>) : (<div></div>)}
        </div>
    )
}

export default Book;
