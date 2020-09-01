import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import { events } from '../../data/events.data';

import Event from './Event.component';

import { ReactComponent as Illustration } from '../../assets/illustrations/event.svg';

import './Events.styles.scss';

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <section id='events' className='section section-events'>
        <Fade bottom>
          <h1 className='section-heading'>Events</h1>
        </Fade>

        <div className='section-content'>
          {events.map((event) => (
            <Event key={event.key} event={event} />
          ))}
        </div>

        <div className='illustration-container'>
          <div className='illustration'>
            <Illustration />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Events;
