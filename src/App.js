import './App.css';
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/HomeConteiner';

  const App = (props) => {  
    return (
      <div className="app-wrapper">
            <BrowserRouter>
        <Header />
        <Home/>
        <div className="app-wrapper-content">
          {/* <Routes>
          <Route path='/home/' element={<Home/>} />
          </Routes> */}
        </div>
        </BrowserRouter>
      </div>
    );
 }

 export default App;