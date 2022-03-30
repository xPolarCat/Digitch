import logo from './logo.svg';
import './App.css';

import {Fragment} from "react";
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
   <Fragment>
     <Navbar/>
     <Footer/>
   </Fragment>
  );
}

export default App;
