import React, { useState } from 'react';
import '../../App.css';
import FormSignup from '../Contact/FormSignup';
import FormSuccess from '../Contact/FormSuccess';
import '../Contact/Form.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import ThemeBtn from '../ThemeBtn'
import {useTheme} from '../../context/Theme';
import './contact.css';

 function Contact() {
   const [isSubmitted, setIsSubmitted] = useState(false);
   const { theme } = useTheme();

   function submitForm() {
     setIsSubmitted(true);
   }
  return (
    <div className={`container ${theme}`}>
    <ThemeBtn />
    <Navbar pageName="Home" pageLink="/" />
    <About />
      
          {!isSubmitted ? (
              <FormSignup submitForm={submitForm} />
            ) : (
            <FormSuccess />
          )}
        
    <Footer />        
    </div>
  );
}

export default Contact;