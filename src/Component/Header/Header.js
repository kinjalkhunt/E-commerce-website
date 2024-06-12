// Navbar.js


import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import Footer from '../Footer/Footer';
import Weetechlogo from '../Assets/Images/imgee/Weetechlogo.png'

const Header = () => {
  return(
    <>
      <nav>
        <img className='logoimg' src={Weetechlogo} alt="Weetech Logo" />
        <ul>
        <li className='Login'><Link to="/Signup">Signup</Link></li>
        <li className='Login'><Link to="/Login">Login</Link></li>


          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Portfolio">Portfolio</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Company">Company</Link></li>
          {/* <li className='Login'><Link to="/Signup">Signup</Link></li> */}
        </ul>
      </nav>
      {/* <Footer /> */}
    </>
  );
};

export default Header;

