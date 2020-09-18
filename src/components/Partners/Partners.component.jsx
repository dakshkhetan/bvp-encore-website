import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';

import { partners } from '../../data/partners.data';

import './Partners.styles.scss';

const Partners = ({ history }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const onClickHandler = (route) => {
    history.push(`/partner/${route}`);
  };

  return (
    <section id='partners' className='section section-partners'>
      <Fade bottom>
        <h1 className='section-heading'>Partners</h1>
      </Fade>
      <div className='section-content'>
        <div className='partners-container'>
          {partners.map((partner) => (
            <div
              key={partner.key}
              className='partner-image'
              onClick={() => onClickHandler(partner.route)}
            >
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

export default withRouter(Partners);
