import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faReceipt , faHeadset } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Feature = () =>{
  return(

    <section className="features">
    <div className="overlay">
        <div className="container">
        <h2>our features</h2>
        <div className="row">
                <div className="col-lg-4 col-sm-12  card">
                <FontAwesomeIcon className="icon" icon={faReceipt} />
                <h3>PLANNING STAGE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna.
 
                   </p>
                   <span>Learn more</span>

                                </div>
                                <div className="col-lg-4 col-sm-12 card">
                <FontAwesomeIcon className="icon" icon={faHotel} />
                <h3>PLANNING STAGE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna.
 
                   </p>
                   <span>Learn more</span>

                                </div>
                                <div className="col-lg-4 col-sm-12 card">
                <FontAwesomeIcon className="icon" icon={faHeadset} />
                <h3>PLANNING STAGE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna.
 
                   </p>
                   <span>Learn more</span>

                                </div>
                                

        </div>
        </div>
    </div>
    </section>
  )
}

export default Feature;