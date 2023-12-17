// components/RegistrationForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    alert(`User ${username} registered successfully with password: ${password}`);
  };

  return (
    <div>
      <div className='registerbody'>

      
      <h2>Registration</h2>
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
      <Link to={`/home`}>
        <button className="button-32" role="button" onClick={handleRegister}>Register</button>
      </Link>
      <Link className='registertologin' to={`/Login`}>Login Form</Link>
    </div>
    </div>
  );
};

export default RegistrationForm;
