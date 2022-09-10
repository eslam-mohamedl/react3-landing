import React from 'react';
import './Lastest.css';
import one from '../../assets/images/news/one.png';
import two from '../../assets/images/news/two.png';


const Lastest = () =>{
   return(
     <section className="Lastest">
     <div className="container">
      <h2 className='heading'>OUR LATEST NEWS</h2>
      <div className="row">
       <div className="col-lg-6">
        <div className='image'>
            <img src={one} />
        </div>
        <div className="box-container">
            <div className="card">
                   <h2>24 <br/> nov</h2>
            </div>
            <div className="text">
                <p> i properties</p>
                <h2>footprints in time : house <br/> in kurashiki, japan</h2>
                <span>read more >></span>
            </div>
        </div>
       </div>
       <div className="col-lg-6">
        <div className='image'>
            <img src={two} />
        </div>
        <div className="box-container">
            <div className="card">
                   <h2>24 <br/> nov</h2>
            </div>
            <div className="text">
                <p> i properties</p>
                <h2>footprints in time : house <br/> in kurashiki, japan</h2>
                <span>read more >></span>
            </div>
        </div>
       </div>
      </div>
     </div>
     </section>
   )
}

export default Lastest;
