import React, { useState } from 'react';
import './Login.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router';
import Footer from '../Footer/Footer';
import { useSearchParams } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [param, setparam] = useSearchParams();

  const navigation = useNavigate()

  console.log("email == ", param.get("email"));

  return (
    <>
      {/* <Header/> */}
      <div className="login-container">
        <div className='login-from'>
          <div>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                placeholder='Enter Your Name'
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button>Login</button>
            <button onClick={(e) => {
              e.preventDefault()
              navigation("/Signup")
            }
            }>
              Signup
            </button>

          </div>

        </div>
      </div>
      {/* <Footer/> */}

    </>
  );
};

export default Login;
