import React, {Fragment} from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Payment from './pages/Payment';
import Login from './pages/Login';

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
