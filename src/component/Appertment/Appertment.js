import React  from 'react';
import './Appertment.css';


const Appertment = () =>{
    return(
        <section className="Appertment">
        <div className="row">
        <div className="col-lg-4">
            <div className='image one'>
        <div className="overlay">
        <h3>$35.000</h3>    
        <p>colorful little aprtment</p>
        <div className="text">
        <p>2BD</p><span>|</span><p>2BA</p><span>|</span>
        <p>920 SF</p>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-4">
            <div className='image two'>
        <div className="overlay">
        <h3>$35.000</h3>    
        <p>colorful little aprtment</p>
        <div className="text">
        <p>2BD</p><span>|</span><p>2BA</p><span>|</span>
        <p>920 SF</p>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-4">
            <div className='image three'>
        <div className="overlay">
        <h3>$35.000</h3>    
        <p>colorful little aprtment</p>
        <div className="text">
        <p>2BD</p><span>|</span><p>2BA</p><span>|</span>
        <p>920 SF</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    )
}


export default Appertment;