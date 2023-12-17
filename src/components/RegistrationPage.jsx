import React from 'react';
import RegistrationForm from './RegistrationForm';
import YTlogo from '../assets/Black.png'



const RegistrationPage = () => {
  return (
    <div>
      <div className='registercontain'>
        
        <div className='register'>

          <img src={YTlogo} alt='Logo'/>

      <RegistrationForm />

      </div></div>
        
   
        
      
    </div>
  );
};

export default RegistrationPage;
