import React, { useEffect } from 'react';

import Hero from '../../components/Hero/Hero.component';
import About from '../../components/About/About.component';
import Events from '../../components/Events/Events.component';
import Partners from '../../components/Partners/Partners.component';
import FAQs from '../../components/FAQs/FAQs.component';
import Contact from '../../components/Contact/Contact.component';

import './Home.styles.scss';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='App'>
      <Hero />
      <About />
      <Events />
      <Partners />
      <FAQs />
      <Contact />
    </div>
  );
};

export default Home;
