import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import image from '../../assets/events/placeholder.png';

import './Events.styles.scss';

const Events = () => (
  <React.Fragment>
    <section id='event' className='section section-event'>
      <Fade bottom>
        <h1 className='section-heading'>Events</h1>
      </Fade>
      <div className='section-content'>
        <div className='fade-container'>
          <div className='posters-container'>
            <div className='poster'>
              <img src={image} alt='event' />
            </div>
            <div className='poster'>
              <img src={image} alt='event' />
            </div>
            <div className='poster'>
              <img src={image} alt='event' />
            </div>
          </div>
          <div className='fade' />
        </div>

        <div>
          <h2 className='text'>and many more...</h2>
        </div>

        <div className='btn-container'>
          <span className='btn-link'>
            <Link to='/events'>
              Checkout All Events{' '}
              <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </Link>
          </span>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Events;
