import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { partners } from '../../data/partners.data';

import './Partner.styles.scss';

const Partner = ({ match }) => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  const index = partners.findIndex(
    (partner) => partner.route === match.params.partnerName
  );

  let partner = null;

  if (index === -1) {
    return <Redirect to='/' />;
  } else {
    partner = partners[index];
  }

  const scrollWithOffset = (el, offset) => {
    scroll.scrollTo(el.offsetTop - offset);
  };

  return (
    <section id='partner' className='section section-partner'>
      <div className='back-btn'>
        <span>
          <HashLink
            smooth
            to='/#partners'
            scroll={(el) => scrollWithOffset(el, 50)}
          >
            <FontAwesomeIcon icon={faArrowLeft} className='icon' /> Back
          </HashLink>
        </span>
      </div>
      <div className='section-content'>
        <div className='logo'>
          <Fade bottom delay={100}>
            <img src={partner.image} alt='partner' />
          </Fade>
        </div>
        <div className='info'>
          <Fade bottom delay={200}>
            <div className='intro'>
              <p>{partner.description}</p>
            </div>
          </Fade>
          <Fade bottom delay={350}>
            <div className='btn-container'>
              <a
                href={partner.website}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='btn-link'>
                  Checkout Website{' '}
                  <FontAwesomeIcon icon={faArrowRight} className='icon' />
                </span>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Partner;
