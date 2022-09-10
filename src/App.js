import { Fragment } from 'react';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Feature from './component/Features/Features';
import Property from './component/Property/Property';
import Appertment from './component/Appertment/Appertment';
import Quotation from './component/Quotation/Quotation';
import Lastest from './component/Lastest/Lastest';
import Footer from './component/Footer/Footer';
function App(){

  return(
      <Fragment>
        <Home/>
        <About/>
        <Feature/>
        <Property/>
        <Appertment/>
        <Quotation/>
        <Lastest/>
        <Footer/>
      </Fragment>
  )
}
export default App;