import React from 'react';
import TicTacToe from './components/TicTacToe';
import Coupon from './components/Coupon';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className='app-container'>
            <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="/TicTacToe"/>}/>
            <Route path="/TicTacToe" element={<TicTacToe/>} />
            <Route path="/Coupon" element={<Coupon/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
