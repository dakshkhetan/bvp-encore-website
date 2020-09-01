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
            <Fade bottom delay={200}>
              <div key={partner.key} className='partner-image'>
                <img src={partner.image} alt='partner' />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
