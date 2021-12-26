import React, { useState } from "react";
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Info from '../info/Info';
import Intro from '../intro/Intro';
import products from '../../data/products'; 

const Home = () => {
    const [ prod, setProd ] = useState(products);

    return (
        <>
        <div>
        <Navbar/>
        <Banner/>
        <Info/>
        <Intro prod={prod}/>
        </div>
        </>
        
    )
}

export default Home;
