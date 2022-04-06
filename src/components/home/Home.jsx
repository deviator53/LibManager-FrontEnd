import React, { useState } from "react";
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Info from '../info/Info';
import Books from '../books/Books';
import products from '../../data/products'; 

const Home = () => {
    const [ prod, setProd ] = useState(products);

    return (
        <>
        <div>
        <Navbar/>
        <Banner/>
        <Info/>
        <Books prod={prod}/>
        </div>
        </>
        
    )
}

export default Home;
