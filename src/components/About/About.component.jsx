import React from 'react';
import Fade from 'react-reveal/Fade';

import { ReactComponent as Image } from '../../assets/about-section/icon-pack.svg';

import './About.styles.scss';

const AboutUs = () => {
  return (
    <section id='about' className='section section-about'>
      <Fade bottom>
        <h1 className='section-heading'>About</h1>
      </Fade>
      <div className='section-content'>
        <div className='info'>
          <Fade bottom delay={150}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta
              faucibus nisi, quis gravida lorem gravida eget. Cras lorem lorem,
              pulvinar vel nibh vitae, ultricies sodales enim. Nam bibendum quam
              nibh, pulvinar molestie nunc dignissim nec. Nam enim ante,
              elementum id sapien ut, elementum volutpat ipsum. Donec et feugiat
              arcu.
            </p>
          </Fade>
        </div>
        <div className='image-container'>
          <Fade bottom delay={200}>
            <Image className='image' />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
