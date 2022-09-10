import React from 'react';
import './Header.css';

const Header = () =>{
    return( 
        <header>
            <div className="overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">

                        <h2> we creatye <br/>  your dream <br/>  appartment</h2>
                        <p>Lorem ipsum is placeholder text commonly used  in the graphic, print, 
                            and publishing industries for previewing layouts and visual mockups. </p>
                        <form>
                           
                            <button type="submit">view project</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </header>
    )
}
export default Header;