import React from 'react';
import LoginForm from './LoginForm';
import YTlogo from '../assets/Black.png'
const LoginPage = () => {
  return (

    <div>   
      
      <div className='registercontain'>
        
        <div className='register'>

        <img src={YTlogo} alt='Logo'/>

       <LoginForm />

      </div>
      
      </div>
        
    
    </div>
  );
};

export default LoginPage;
