
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [login, setLogin] = useState({ email: "kinjalpkhunt@gmail.com", password: "kinjal90", username: "kinjal khunt" });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLogin({
//       ...login,
//       [name]: value
//     });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Login details: ", login);
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     navigate("/Signup");
//   };

//   return (
//     <>
//       <div className="login-container">
//         <div className='login-form'>
//           <div>
//             <div>
//               <label>Username:</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={login.username}
//                 placeholder='Enter Your Name'
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div>
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={login.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div>
//               <label>Password:</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={login.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleSignup}>Signup</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email: login.email,
        password: login.password
      });

      if (response.status === 200) {
        // Redirect to another page on successful login
        navigate('/dashboard'); // Replace with your route
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/Signup");
  };

  return (
    <>
      <div className="login-container">
        <div className='login-form'>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={login.email}
                onChange={handleInputChange}
                placeholder='Enter Your Email'
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={login.password}
                onChange={handleInputChange}
                placeholder='Enter Your Password'
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
            <button onClick={handleSignup}>Signup</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
