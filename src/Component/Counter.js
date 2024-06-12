import React, { useState } from 'react';

function Counter() {

  // const [count, setColour] = useState(0);
  const [bgColor, setBgColor] = useState('');

  return (
    
    <div
      style={{height:'1000px',backgroundColor: bgColor }}>

      <p>{bgColor}</p>
      <button onClick={()=>{setBgColor('red')}} style={{backgroundColor:'red'}}>Red Button</button>

      <button onClick={()=>{setBgColor('blue')}} style={{backgroundColor:'blue'}}>Blue Button</button>
      {/* <div style={{ width: '1000px', height: '1000px', backgroundColor: bgColor, marginTop: '20px' }}></div> */}

    </div>
  )
};
export default Counter;
