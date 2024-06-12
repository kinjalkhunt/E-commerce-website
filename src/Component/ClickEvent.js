

// import React, { useState } from 'react';

// const ClickEvent = () => {
//   const [message, setMessage] = useState('');

//   const handleClick = (e) => {
//     e.preventDefault();
//     setMessage(message === 'Hello' ? 'React!' : 'Hello');
//   }
//  const handleRightClick = (e) => {
//     e.preventDefault(); // Prevents the default context menu
//     setMessage('hello react...on press Right Clicked ');
//   };
// const handleDoubleClick = () => {
//     setMessage('Double-click detected.');
// }

// const handleMouseDown = () => {
//     setMessage("this is MouseDown Event");
//   };
//   const handleMouseEnter = () => {
//     setMessage(message === 'Hello' ? 'React!' : 'Hello');
//   };
// const handleMouseLeave = () => {
//     setMessage("hello how r u ?");
//   };

// const handleMouseMove = (event) => {
//     if(event.button === 1);
//     handleClick()
//   };
// const handleMouseout = () => {
//     handleClick(); // Trigger the action when mouse leaves the element
//   };
// const handleMouseOver = () => {
//     handleClick(); // Trigger the action when mouse moves over the element
// //   };
// const handleMouseUp = () => {
//     handleClick(); // Trigger the action when the mouse button is released
//   };
  // const handleAbortCapture  = () =>{
  //   handleClick();
  // }
  
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px',color:'red'}}>
//       <button on ={handleClick}  onAnimat ={handleAnimationEnd}>
//         Click Me
//       </button>
//       <p>{message}</p>

//       {/* <h1>{position}</h1> */}
//     </div>
//   );
// };

// export default ClickEvent;

// import React, { useEffect, useRef } from 'react';

// const ClickEvent = () => {
//   const abortControllerRef = useRef(new AbortController());
//   const onClickHandlerRef = useRef(() => console.log('Aborted'));

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://663cb35717145c4d8c374f0d.mockapi.io/weetech/names', { signal: abortControllerRef.current.signal });
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         if (error.name === 'AbortError') {
//           onClickHandlerRef.current(); // Programmatically trigger the onClick-like behavior
//         } else {
//           console.error(error);
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       abortControllerRef.current.abort(); // Clean up on component unmount
//     };
//   }, []);

//   return (
//     <div>
//       {/* Your UI here */}
//       <button ref={el => el.addEventListener('click', onClickHandlerRef.current)}>Trigger onClick</button>
//     </div>
//   );
// };

// export default ClickEvent;

// import React, { useState } from 'react';
// import './ClickEvent.css';

// const ClickEvent = () => {
//   const [animationEnded, setAnimationEnded] = useState(0);

//   const handleAnimationEnd = () => {
//     setAnimationEnded(prevcount => prevcount + 2);
//   };

//   const handleClick = () => {
//     // if (animationEnded) {
//     // animationEnded(`Animation has iterated ${animationEnded} times`)
//     alert(`Animation has iterated ${animationEnded} times`);

//     // alert('Animation ended and element clicked!');
//       // Perform any additional actions here
//     }
  

//   return (
//     <div
//       className="animated-element"
//       onAnimationStart={handleAnimationEnd}
//       onClick={handleClick}
//     >
//       Click me after animation ends
//     </div>
//   );
// };

// export default ClickEvent;


// import React, { useState } from 'react';
// import './ClickEvent.css'; // Assuming the CSS is in App.css

// function ClickEvent() {
//   const [message, setMessage] = useState('Hello');
//   const [animationStarted, setAnimationStarted] = useState(false);

//   const handleAnimationStart = () => {
//     setAnimationStarted(true);
//   };

//   const handleAuxClick = (e) => {
//     e.preventDefault();
//     if (animationStarted) {
//       setMessage(message === 'Hello' ? 'World!' : 'Hello');
//       setAnimationStarted(false); // Reset the animation started state
//     }
//   };

//   return (
//     <div>
//       <button
//         onAuxClick={handleAuxClick}
//         onAnimationStart={handleAnimationStart}
//         className="animated-button"
//       >
//         onAuxClick
//       </button>
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default ClickEvent;
