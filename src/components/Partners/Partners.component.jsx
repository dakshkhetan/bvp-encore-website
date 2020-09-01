import React from 'react';
import Fade from 'react-reveal/Fade';

import { partners } from '../../data/partners.data';

import './Partners.styles.scss';

const Partners = () => {
  return (
    <section id='partners' className='section section-partners'>
      <Fade bottom>
        <h1 className='section-heading'>Partners</h1>
      </Fade>
      <div className='section-content'>
        <Fade bottom delay={150}>
          <div className='partners-container'>
            {partners.map((partner) => (
              <div key={partner.key} className='partner-image'>
                <img src={partner.image} alt='partner' />
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Partners;
