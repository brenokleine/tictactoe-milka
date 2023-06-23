import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

  return (
    <div className='btn-container'>
      <div className="btn-group">
        <Link to="/TicTacToe" className='btn btn-light'>
          <p className='btn-txt'>The Game</p>
        </Link>

        <Link to="/Coupon" className='btn btn-light'>
          <p className='btn-txt'>Coupon Page</p>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
