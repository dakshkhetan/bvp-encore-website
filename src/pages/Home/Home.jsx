import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import Hero from '../../components/Hero/Hero.component';
import About from '../../components/About/About.component';
import Societies from '../../components/Societies/Societies.component';
import Events from '../../components/Events/Events.component';
import Partners from '../../components/Partners/Partners.component';
import FAQs from '../../components/FAQs/FAQs.component';
import Team from '../../components/Team/Team.component';
import Contact from '../../components/Contact/Contact.component';

import './Home.styles.scss';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App'>
      <Hero />
      <About />
      <Societies />
      <Events />
      <Partners />
      <FAQs />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
