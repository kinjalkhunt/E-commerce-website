
import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Signup = () => {
  let navigate = useNavigate();
  return (
    <>
      {/* <Header /> */}
      <div className="signup-container">
        <div className='signup-form'>

          <h2>Signup</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              // value={formData.username}
              // onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
            />
          </div>

          <button>Signup</button>
          <button onClick={(e) => {
            e.preventDefault()
            navigate('/Login')
          }}>
            Login
          </button>

        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Signup;
