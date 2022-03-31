import logo from './logo.svg';
import './App.css';

import {Fragment} from "react";
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Payment from './pages/Payment.js'

function App() {
  return (
   <Fragment>
     <Navbar/>
     <Payment/>
     <Footer/>
   </Fragment>
  );
}

export default App;
