import React from 'react';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import { societies } from '../../data/societies.data';

import './Societies.styles.scss';

const Societies = ({ history }) => {
  const onClickHandler = (society) => {
    history.push(`/society/${society.name.toLowerCase()}`);
  };

  return (
    <section id='societies' className='section section-societies'>
      <Fade bottom>
        <h1 className='section-heading'>Collaborating Societies</h1>
      </Fade>
      <div className='section-content'>
        <div className='societies-container'>
          {societies.map((society) => (
            <div
              key={society.key}
              className='society'
              onClick={() => onClickHandler(society)}
            >
              <Fade bottom delay={200}>
                <img src={society.logo} alt='society' />
              </Fade>
              <Fade bottom delay={500}>
                <span className='underline'>{society.name}</span>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withRouter(Societies);
