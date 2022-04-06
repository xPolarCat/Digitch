
import './index.css';
import './App.css';
import Search from './Search/Search';
import UserProfile from './UserProfile/UserProfile';
import CreateService from './CreateService/CreateService';

import React, {Fragment} from 'react';
import './App.css';
import './index.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (

   <Fragment>
     <Search/>
     <Navbar/>
     <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/Chat" element={<Chat/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/payment" element={<Payment/>} />     
        <Route exact path="/" element={<Home/>} />    
      </Routes>
     <Footer/>
   </Fragment>

  );
}

export default App;
