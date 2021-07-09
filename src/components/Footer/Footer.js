import React from 'react';
import './Footer.css';
import {useTheme} from '../../context/Theme';
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa';



function Footer() {
  const { theme } = useTheme();

  return (
    <div className={`footer-container ${theme}`}>
      <section className={`social-media ${theme}`}>
        <div className={`social-media-wrap ${theme}`}>
          
          {/*<small className='website-rights'><a href="https://www.linkedin.com/in/nathalia-siqueira-cecilio-a8043513b/"
           target="_blank" rel="noopener noreferrer"> Nathalia Cecílio © 2021</a></small>*/}

          <div className={`social-icons ${theme}`}>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/luca_cecilio/'
              target='_blank' rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <FaInstagram size={20}/>
            </a>
            <a
              className='social-icon-link whatsapp'
              href='https://api.whatsapp.com/send?phone=5562985968152'
              target='_blank' rel='noopener noreferrer'
              aria-label='whatsapp'
            >
              <FaWhatsapp size={20}/>
            </a>
           
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/luca-cec%C3%ADlio-66572210b/'
              target='_blank' rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedinIn size={20}/>
            </a>

            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;