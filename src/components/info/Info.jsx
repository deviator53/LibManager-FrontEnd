import React from 'react';
import Grid from '@material-ui/core/Grid';
import './info.css';
import Student from '../../images/student.jpg';

const Info = () => {
    return (
        <>
            <div className="grid-content">
                <Grid container>
                    <Grid item xs={12} md={6} lg={6}>
                        <img src={Student} alt="student" className="info-img"/>

                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <div className="info-content">
                            <div><h3><span className="text-color">A</span>bout <span className="text-color">U</span>s</h3></div>

                            <div><p className="info-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque error sunt vel ea delectus, velit provident ullam consequuntur molestias, quos explicabo est aut tenetur accusantium cum cumque maxime corrupti nulla? Fuga corrupti quis i
                                 repudiandae officiis numquam voluptate corporis?</p></div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Info;
