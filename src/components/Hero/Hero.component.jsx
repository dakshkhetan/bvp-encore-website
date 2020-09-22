import React from 'react';
import Fade from 'react-reveal/Fade';

import video from '../../assets/video/teaser.mp4';
import poster from '../../assets/encore-logo/Logo1-Black.jpeg';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <section id='home' className='section section-hero'>
      <Fade>
        <div className='logo-container'>
          <video src={video} poster={poster} autoPlay loop muted playsInline />
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
