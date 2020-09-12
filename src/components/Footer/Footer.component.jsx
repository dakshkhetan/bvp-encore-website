import React from 'react';
import ReactGA from 'react-ga';
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
  const onClickHandler = () => {
    ReactGA.event({
      category: "'External Link' Clicks",
      action: "Daksh's website opened",
      label: 'Website opened from footer credits link'
    });
    window.open('https://dakshkhetan.now.sh', '_blank');
  };

  return (
    <section id='footer' className='footer'>
      <div className='social-icons'>
        <a
          href='https://twitter.com/BvpEncore'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} className='icon twitter' />
        </a>
        <a
          href='https://www.instagram.com/encore.bvp'
          className='social-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} className='icon instagram' />
        </a>
        <a
          href='https://www.facebook.com/encorebvp'
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
      <span className='sub-heading credit' onClick={onClickHandler}>
        Designed & developed by{' '}
        <span className='credit-link underline'>Daksh Khetan</span>
      </span>
    </section>
  );
};

export default Footer;
