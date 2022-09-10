import React from 'react';
import "./Quotation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Quotation = () =>{ 
    return(
     <section className="Quotation">
          <div className='row one'>
          <div className="col-lg-6">

           </div>
          <div className="col-lg-6 two">
          

           </div>

           
     </div>
     <div className='row two'>

<div className="col-lg-6 card-one">
            <h1>GET A FREE <br/>QUOTATION TODAY!</h1>
            <p>Have any questions in mind?</p>
            <button>contact us</button>
           </div>
           <div className="col-lg-6 two card-two">
              <p>Say Hello,</p>
              <div className="float">
              <FontAwesomeIcon className="image" icon={faPhone} />

              <p>+44 563 986 4785</p>
              </div>
          </div>
       </div>
     </section>
    )
}

export default Quotation;