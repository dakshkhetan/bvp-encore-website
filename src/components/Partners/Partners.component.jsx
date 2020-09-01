import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { partners } from '../../data/partners.data';

import './Partners.styles.scss';

const Partners = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <section id='partners' className='section section-partners'>
      <Fade bottom>
        <h1 className='section-heading'>Partners</h1>
      </Fade>
      <div className='section-content'>
        <div className='partners-container'>
          {partners.map((partner) => (
            <div key={partner.key} className='partner-image'>
              <Fade bottom delay={200}>
                <img src={partner.image} alt='partner' />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
