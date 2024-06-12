// src/components/SomeComponent.js

import React, { useState, useEffect } from 'react';
import Errorpage from './Errorpage';

const SomeComponent = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Simulate an API call
    fetchSomeData()
      .then(response => {
        // Handle successful response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setHasError(true);
      });
  }, []);

  const fetchSomeData = async () => {
    // Simulate a fetch operation that fails
    return Promise.reject(new Error('Failed to fetch data'));
  };

  if (hasError) {
    return <Errorpage />;
  }

  return (
    <div>
      <h1>Data Loaded Successfully</h1>
      {/* Display data */}
    </div>
  );
};

export default SomeComponent;
