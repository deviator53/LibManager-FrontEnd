import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './intro.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 325,
    },
    media: {
      height: 540,
    },
  });

const Intro = ({ prod }) => {
    const classes = useStyles();

    if(!prod || prod.length === 0){
        return <p>No prod</p>
    }
    return <div className="intro-container">
        {prod.map((pro) => (
            <div className="card-container">
                <div className="card-content">
                    <div className="card-image">
                        <img src={pro.imageUrl} alt="card-image" className="intro-img"/>
                    </div>
                    <div className="text-container">
                        <p className="title-text">
                            {pro.title}
                        </p>
                        <p className="author-text">
                           By:  {pro.author}
                        </p>
                        <button className="card-btn">Select</button>
                    </div>
                </div>
                {/* <img src={pro.imageUrl} alt="student" className="info-img"/> */}

            </div>

            
        ))}
        </div>
    
    
}

export default Intro;
