import React, { useState } from 'react';
import '../../App.css';
import FormSignup from '../Contact/FormSignup';
import FormSuccess from '../Contact/FormSuccess';
import '../Contact/Form.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';

import { Divider } from 'semantic-ui-react';

 function Contact() {
   const [isSubmitted, setIsSubmitted] = useState(false);

   function submitForm() {
     setIsSubmitted(true);
   }
  return (
    <>
    <Navbar />
    <About />
    <Divider />
        <div className='form-container'>
          {!isSubmitted ? (
              <FormSignup submitForm={submitForm} />
            ) : (
            <FormSuccess />
          )}
        </div>
    <Footer />        
    </>
  );
}

export default Contact;