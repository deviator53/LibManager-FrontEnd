import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import products from '../../data/products'; 
import axios from "axios";

const Book = () => {
    const [ ProductData, setProductData] = useState({});
    let params = useParams();

    const getDetails = async () => {
		const data = await fetch(`${products}/${params.detail}`);
        const detailData = await data.json();
        console.log(data);
        setProductData(detailData);
		
    };

    useEffect(() => {
		getDetails()
	}, []);

    


    return (
        <>
        	<div className="card-heading">{ProductData.title}</div>

        </>
    )
}

export default Book;
