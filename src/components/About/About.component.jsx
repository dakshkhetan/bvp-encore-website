import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { ReactComponent as Image } from '../../assets/about-section/icon-pack.svg';

import './About.styles.scss';

const AboutUs = () => (
  <section id='about' className='section section-about'>
    <Fade bottom delay={100}>
      <h1 className='section-heading'>About</h1>
    </Fade>
    <div className='section-content'>
      <div className='info'>
        <Fade bottom delay={150}>
          <p>
            The key to unlocking our normal daily lives is a vaccine, and
            because of these many students have built up various feelings like
            anxiety so a little burst of magic is required to beat those
            feelings and continue with a fresh start. Now, magic might be
            unreal, but some students are no less magical, for the co-curricular
            skills and rhythms they declare with, are indubitably surreal.
          </p>
          <p>
            ENCORE is a non-technical fest of our college. It tests the
            non-technical and managerial skills of the students which act as a
            zephyr to them as they tend to discover a new part of themselves. It
            sets up the stage for all the dynamic students to perform, innovate,
            create, excel, and provide an opportunity to win exciting prizes.
          </p>
          <p>
            It provides a platform to bring together young enthusiasts from
            colleges in Delhi-NCR to showcase their talent, knowledge, and
            co-curricular skills.
          </p>
        </Fade>
      </div>
      <div className='image-container'>
        <Zoom delay={200}>
          <Image className='image' />
        </Zoom>
      </div>
    </div>
  </section>
);

export default AboutUs;
