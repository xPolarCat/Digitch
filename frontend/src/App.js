import React, {Fragment} from 'react';
import './App.css';
import './index.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Payment from './pages/Payment';
import Login from './pages/login';
import Register from './pages/register';
import Chat from './pages/Chat';
import Details from './pages/Details'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
   <Fragment>
     <Navbar/>
     <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/Details" element={<Details/>}/>
        <Route exact path="/Chat" element={<Chat/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/payment" element={<Payment/>} />     
      </Routes>
     <Footer/>
   </Fragment>
  );
}

export default App;
