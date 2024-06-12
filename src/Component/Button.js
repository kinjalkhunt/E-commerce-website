import React, { useState } from 'react';


function Button() {
  const [message, setMessage] = useState('Hello');

  const handleClick = (e) => {
    e.preventdefault();
    
    setMessage(message === 'Hello' ? 'Word!' : 'Hello');
  };

  return (
    <div>
      <button onClick={handleClick}>onClick</button>
      <h1>{message}</h1>
    </div>
  );
}

export default Button;
