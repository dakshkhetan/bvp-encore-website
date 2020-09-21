import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';

import { events } from '../../data/events.data';
import { eventsList } from '../../data/events.data';

import Event from './Event.component';

import { ReactComponent as Illustration } from '../../assets/illustrations/event.svg';

import './Events.styles.scss';

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isListOpen, toggleList] = useState(false);

  const mapEventComponent = (events) =>
    events.map((event) => <Event key={event.code} event={event} />);

  return (
    <React.Fragment>
      <section id='events' className='section section-events'>
        <Fade bottom>
          <h1 className='section-heading'>Events</h1>
        </Fade>

        <div className='section-content'>
          <Fade bottom delay={150}>
            <div
              className={`events-list ${isListOpen ? 'open' : ''}`}
              onClick={() => toggleList(!isListOpen)}
            >
              <div className='title'>List of Events</div>
              <div className='list'>
                <ul>
                  {eventsList.map((event, i) => (
                    <li key={i}>
                      <AnchorLink offset='620' href={`#${event.code}`}>
                        {event.name}
                      </AnchorLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>

          {mapEventComponent(events.das)}
          {mapEventComponent(events.enactus)}
          {mapEventComponent(events.acm)}
          {mapEventComponent(events.edc)}
          {mapEventComponent(events.aura)}
          {mapEventComponent(events.isa)}
          {mapEventComponent(events.aagaaz)}
          {mapEventComponent(events.bvpcsi)}
          {mapEventComponent(events.anon)}
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
