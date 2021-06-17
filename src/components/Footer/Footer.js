import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          
          {/*<small className='website-rights'><a href="https://www.linkedin.com/in/nathalia-siqueira-cecilio-a8043513b/"
           target="_blank" rel="noopener noreferrer"> Nathalia Cecílio © 2021</a></small>*/}

          <div className='social-icons'>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/luca_cecilio/'
              target='_blank' rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link whatsapp'
              href='https://api.whatsapp.com/send?phone=5562985968152'
              target='_blank' rel='noopener noreferrer'
              aria-label='whatsapp'
            >
              <i className='fab fa-whatsapp' />
            </a>
           
           
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/luca-cec%C3%ADlio-66572210b/'
              target='_blank' rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;