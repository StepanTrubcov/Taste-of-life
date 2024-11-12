import './App.css';
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/HomeConteiner';
import Information from './Component/Information/information';
import CalorieCalculator from './Component/Calculator/CalculatorConteiner'

  const App = (props) => {  
    return (
      <div className="app-wrapper">
            <BrowserRouter>
        <Header />
        <div className="app-wrapper-content">
          <Routes>
          <Route path='/Taste-of-life' element={ <Home/>} />
          <Route path='/calculator/' element={<CalorieCalculator/>} />
          </Routes>
        </div>
        <Information/>
        </BrowserRouter>
      </div>
    );
 }

 export default App;