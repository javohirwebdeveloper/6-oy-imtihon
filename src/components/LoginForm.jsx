import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const isAuthenticated = AuthService.login(username, password);

    if (isAuthenticated) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
       <div className='registerbody'>
      <h2>Login</h2>
      <label>
        <input placeholder='Enter Email Address' className='input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        <input placeholder='Enter Password' className='input input2'
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><label>
        <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
       
      </label>
      </label>
      <br />
      
      <br />
      <button className="button-32" role="button" onClick={handleLogin}>
        Login
      </button>
      <Link className='registertologin' to={`/`}>Login Form</Link>
    </div></div>
  );
};

export default LoginForm;
