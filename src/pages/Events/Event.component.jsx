import React from 'react';
import ReactGA from 'react-ga';
import Fade from 'react-reveal/Fade';

import { ReactComponent as Divider } from '../../assets/illustrations/section-divider.svg';

const Event = ({ event }) => {
  const {
    code,
    name,
    description,
    prize,
    organisingSociety,
    registrationLink,
    poster
  } = event;

  const onClickHandler = (name, registrationLink) => (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "'Event Registration' Clicks",
      action: `'${name}' button click`,
      label: `'${name}' registration button clicked`
    });
    window.open(registrationLink, '_blank');
  };

  return (
    <React.Fragment>
      <div className={`event-container ${code}`}>
        <Fade delay={250}>
          <div className='poster'>
            <img src={poster} alt='poster' />
          </div>
        </Fade>
        <div className='info'>
          <Fade bottom delay={200}>
            <h2>{name}</h2>
          </Fade>
          <Fade bottom delay={200}>
            <p>{description}</p>
          </Fade>
          <Fade bottom delay={400}>
            <p>
              <span>Prize Money: </span>
              <span className='underline'>Rs. {prize}</span>
            </p>
          </Fade>
          <Fade bottom delay={500}>
            <p>
              <span>Organising Society: </span>
              <span className='underline'>{organisingSociety}</span>
            </p>
          </Fade>
          <Fade bottom delay={600}>
            <p>
              <span>To Register: </span>
              <span
                className='register-link'
                onClick={onClickHandler(name, registrationLink)}
              >
                Click here
              </span>
            </p>
          </Fade>
        </div>
      </div>

      <div className='divider-container'>
        <Divider className='divider' />
      </div>
    </React.Fragment>
  );
};

export default Event;
