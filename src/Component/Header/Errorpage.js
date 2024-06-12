// ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';
// import Err './Errorpage.css'; // Optional, if you want to add custom styles
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  return (
    <div className="error-page-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for can't be found.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
