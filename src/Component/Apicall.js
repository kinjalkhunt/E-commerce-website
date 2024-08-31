
// // import React, { useState, useEffect, useRef } from 'react';
// // import axios from 'axios';
// // import { Link,useNavigate } from 'react-router-dom';

// // const Apicall = () => {
// //     const [apidata, setApiData] = useState([]);
// //     const [reload, setReload] = useState(false);
// //     let navigate = useNavigate()

// //     let ref = useRef(0);


// //     const apiCalling = () => {
// //         try {
// //             axios
// //                 .get('https://663cb35717145c4d8c374f0d.mockapi.io/weetech/names')
// //                 .then((response) => {
// //                     setApiData(response.data);
// //                 })
// //                 .catch((err) => {
// //                     console.log('err', err);
// //                 });
// //         } catch (error) {
// //             console.log('error:', error);
// //         }
// //     };
// //     ref.current = ref.current + 1;
// //     console.log('you clicked'+ ref.current + 'times!')


// //     useEffect(() => {
// //         Apicall();
// //     }, []);

// //     return (
// //         <>
// //         {/* <button onClick={Apicall}> click Me </button> */}
// //               <button onClick={() => setReload(!reload)}>Reload</button>
// //             {!apidata.length ? (
// //                 <h1>There is no data</h1>
// //             ) : (
// //                 apidata.map((value) => (
// //                     <div key={value.id} style={{ border: '2px solid gray', margin: '10px' }}
// //                     onClick={()=>navigate(`/detail/${value.id}`)} >
// //                         <img src={value.avatar} alt={value.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
// //                         <p>id: {value.id}</p>
// //                         <p>name: {value.name}</p>
// //                         <p>Date: {new Date(value.createdAt).toLocaleDateString()}</p>
// //                         <p>Time: {new Date(value.createdAt).toLocaleTimeString()}</p>
// //                         {/* <Link to={`/detail/${value.id}`}> DetailComponent</Link> */}
// //                     </div>
// //                  ))
// //             )} 
// //         </>
// //     ); 
// // }; 

// // export default Apicall; 


import { useRef, useState,useEffect } from 'react';

export default function Apicall() {
  let ref = useRef(0);
  let count = 0;
  const [apidata, setApiData] = useState(true)

  function handleClick() {
    ref.current = ref.current + 1;
    count += 1;
    console.log('You clicked ' + ref.current + ' times!'+ 'and count is' + count +  'and apiData is'+  apidata);
    setApiData(apidata ? false : true)
  }
  useEffect(() => {//use effect tran rite (1)everytime (2) onload (3)usestatema
        //  Apicall();
        }, []);
    

  return (

    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
