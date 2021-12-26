import React from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import BannerImg from '../../images/banner.jpg';
import './banner.css';


const useStyles = makeStyles(theme => ({
 

 }));

const Banner = () => {
    const classes = useStyles();

    return (
        <>
        <div className="bannerImg">
           <div className="banner__overlay">
                <h3>Welcome to LibManager</h3>
                <p className="overlay__text">Library Manager helps you manage and organize your book stock in realtime with minimal efforts. Your books will be easy to monitor and more convenient for the lendees to keep track of their activities</p>
                <button className="banner__btn">Continue</button>
           </div>
        </div>
        </>
    )
}

export default Banner;
