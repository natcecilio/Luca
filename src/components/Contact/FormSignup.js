import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {
 const{handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
       <h1>Get in Touch</h1> 
         <div className='form-inputs'>
            <label htmlFor='username' className='form-label'>
              Name
            </label>
            <input id='username' 
                    type='text' 
                    name='username' 
                    className='form-input'
                    placeholder='Enter your name'
                    value={values.username}
                    onChange={handleChange} 
            />
            {errors.username && <p>{errors.username}</p>}
         </div>
         <div className='form-inputs'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input 
              id='email'
              type='text' 
              name='email' 
              className='form-input'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}  
              />
               {errors.email && <p>{errors.email}</p>}
         </div>
         <div className='form-inputs'>
            <label htmlFor='message' className='form-label'>
            Message
            </label>
            <textarea 
              rows='5'
              id='message'
              type='text' 
              name='message' 
              className='form-input'
              placeholder='Enter your message' 
              value={values.message}
              onChange={handleChange} 
              />
               {errors.message && <p>{errors.message}</p>}
         </div>
         
         <button className='form-input-btn' type='submit'>Submit</button>
        
      </form>
    </div>
  )
}

export default FormSignup;
