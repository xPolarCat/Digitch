import React, {Fragment} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/login';
import Register from './pages/register';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
      </Routes>
    </Fragment>
  // <div className="App">
  // <Login />
  // </div>
  );
}

export default App;
