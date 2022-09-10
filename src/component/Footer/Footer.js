import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';


const Footer = () =>{
   return(
      <section className="Footer">
        <div className='container'>
        <div className="row">
            <div className="col-lg-3">
            <h3>ABOUT US</h3>
            <p>Heaven fruitful doesn't over lesser days appear 
                creeping seasons so behold bearing days open</p>
                <h1>hus<span>.</span></h1>
            </div>

            <div className="col-lg-3">
                <h3>CONTACT INFO</h3>
                <p>Address :Your address goes here, your demo address.</p>
                <span>Phone : +8880 44338899</span><br/>
                <span>Email : info@colorlib.com</span>
                </div>
                <div className="col-lg-3">
                <h3>IMPORTANT LINK</h3>
                <ul>
                    <a href="#"><li>View Project</li></a>
                    <a href="#"><li>Contact Us</li></a>
                    <a href="#"><li>Testimonial</li></a>
                    <a href="#"><li>Proparties</li></a>
                    <a href="#"><li>Support</li></a>
                </ul>
                </div>
                <div className="col-lg-3">
                <h3>NEWSLETTER</h3>
                <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons</p>
                <form>
                    <input type="text" placeholder='enter text' />
                    <button><FontAwesomeIcon icon={faComment} /></button>
                </form>
                </div>

        </div>
        <div className='box-container'>
        <div className='box-left'>
         <p>2022 templated designed by eslam mohamed</p>
        </div>
        <div className='box-right'>
        <FontAwesomeIcon className="icon" icon={faComment} />
        <FontAwesomeIcon className="icon" icon={faComment} />
        <FontAwesomeIcon className="icon" icon={faComment} />
        </div>
        </div>
        </div>
      </section>
   )
}

export default Footer;