import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import './Footer.styles.scss';

const Footer = () => {
  return (
    <section id='footer' className='footer'>
      <div className='social-icons'>
        <a
          href='https://twitter.com/'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
        </a>
        <a
          href='https://www.instagram.com/'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} className='icon instagram' />
        </a>
        <a
          href='https://www.facebook.com/'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faFacebook} className='icon facebook' />
        </a>
      </div>

      <div className='arrow-container' onClick={() => scroll.scrollToTop()}>
        <FontAwesomeIcon icon={faArrowUp} className='arrow' />
      </div>

      <h1 className='heading'>COPYRIGHT © 2020</h1>
      <p className='sub-heading'>
        Powered by <a href='http://encore-fest.now.sh/'>BVP Encore</a>. All
        rights reserved.
      </p>
      <p className='sub-heading credit'>
        Designed & developed by{' '}
        <a
          href='https://dakshkhetan.now.sh'
          target='_blank'
          rel='noopener noreferrer'
          className='credit-link'
        >
          Daksh Khetan
        </a>
      </p>
    </section>
  );
};

export default Footer;
