
import './index.css';
import './App.css';
import React, {Fragment} from 'react';
import './App.css';
import './index.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import Details2 from './pages/Details2'
import Details from './pages/Details'
import Home from './pages/Home';
// import Details from './pages/Details';
import CreateService from './pages/CreateService';
import Search from './pages/Search';
import UserProfile from './pages/UserProfile';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from '@mui/material';



function App() {
  return (

   <Fragment>
     <AppBar position="sticky">
      <Navbar/>
     </AppBar>
     <Routes>
        <Route exact path="/userProfile" element={<UserProfile/>}/>
        <Route exact path="/createService" element={<CreateService/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/details" element={<Details/>}/>
        {/* <Route exact path="/chat" element={<Chat/>}/> */}
        <Route exact path="/Details2" element={<Details2/>}/>
        <Route exact path="/Chat" element={<Chat/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/payment" element={<Payment/>} /> 
        <Route exact path="/" element= {<Home />}/>  
      </Routes>
     <Footer/>
   </Fragment>

  );
}

export default App;
