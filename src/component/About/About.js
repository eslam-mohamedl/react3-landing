import React from 'react';

import exp_bg from '../../assets/images/about/exp_bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import './About.css';
const About = () =>{
    return(
        <section className="About">
        <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="image">
                <img  src={exp_bg}  alt="error"/>

                </div>
            </div>
            <div className="col-lg-6 two">
                 <h2>we are hus <span>realestate company</span></h2>
                 <p>Lorem ipsum is placeholder text commonly used in the graphic, print, 
                            and publishing industries for previewing layouts and visual mockups. </p>
                           <span> <FontAwesomeIcon icon={faSquareCheck} /> <p>Lorem ipsum dolor sit amet</p></span>
                           <span> <FontAwesomeIcon icon={faSquareCheck} /> <p>Consectetur adipisicing elit, sed do</p></span>
                           <span> <FontAwesomeIcon icon={faSquareCheck} /> <p>Eiusmod tempor incididunt ut labore</p></span>
                           <span> <FontAwesomeIcon icon={faSquareCheck} /> <p>Ad minim veniam, quis nostrud.</p></span>

 
 
            </div>
        </div>
        </div>
        </section>
    )
}

export default About;