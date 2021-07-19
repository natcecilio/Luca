import React, {useState} from 'react';
import FormSignup from './FormSignup';
import './Form.css';


const Form = () => {
  const [setIsSubmitted] = useState(false)
  

  function submitForm() {
    setIsSubmitted(true);
  }
 
  return (
   
    <>
      <FormSignup  />  
    </>
   
  );
};

export default Form;
