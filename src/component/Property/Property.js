import React from 'react';
import './Property.css';
import one from '../../assets/images/certificates/one.png';
import two from '../../assets/images/certificates/two.png';
import three from '../../assets/images/certificates/three.png';


const Property = () =>{
    return(
        <section className="Property">
        <div className="container">
        <div className="row text-center">
            <div className="col-lg-3 col-md-4 col-sm-12 card">
             <h2>PROPERTY <span>CERTIFICATES</span></h2>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
                <img src={one} alt="error" />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
            <img src={two} alt="error" />

            </div>
            <div className="col-lg-3  col-md-4 col-sm-12">
            <img src={three} alt="error" />

            </div>
        </div>
        </div>
        </section>
    )
}

export default Property;
