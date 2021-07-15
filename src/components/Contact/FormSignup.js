import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
import {useTheme} from '../../context/Theme';

const FormSignup = ({submitForm}) => {
const{handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
const { theme } = useTheme(); 


  return (
    <div className={`form-content-right ${theme}`}>
      <form className={`form ${theme}`} onSubmit={handleSubmit}>
       <h1>Get in Touch</h1> 
         <div className={`form-inputs ${theme}`}>
            <label htmlFor='username' className={`form-label ${theme}`}>
              Name
            </label>
            <input id='username' 
                    type='text' 
                    name='username' 
                    className={`form-input ${theme}`}
                    placeholder='Enter your name'
                    value={values.username}
                    onChange={handleChange} 
            />
            {errors.username && <p>{errors.username}</p>}
         </div>
         <div className={`form-inputs ${theme}`}>
            <label htmlFor='email' className={`form-label ${theme}`}>
              Email
            </label>
            <input 
              id='email'
              type='text' 
              name='email' 
              className={`form-input ${theme}`}
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}  
              />
               {errors.email && <p>{errors.email}</p>}
         </div>
         <div className={`form-inputs ${theme}`}>
            <label htmlFor='message' className={`form-label ${theme}`}>
            Message
            </label>
            <textarea 
              rows='5'
              cols='50'
              id='message'
              type='text' 
              name='message' 
              className={`form-input-message ${theme}`}
              placeholder='Enter your message' 
              value={values.message}
              onChange={handleChange} 
              />
               {errors.message && <p>{errors.message}</p>}
               <button className={`form-input-btn ${theme}`} type='submit'>Submit</button>
         </div>
         
         
        
      </form>
    </div>
  )
}

export default FormSignup;
