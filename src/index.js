import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header/Header.component';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Society from './components/Society/Society.component';
import Partners from './components/Partners/Partners.component';
import Partner from './components/Partner/Partner.component';
import Team from './components/Team/Team.component';
import FAQs from './components/FAQs/FAQs.component';
import Contact from './components/Contact/Contact.component';
import Footer from './components/Footer/Footer.component';

import './index.css';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

ReactGA.initialize('UA-177141157-1');

const Root = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/events' component={Events} />
      <Route path='/partners' component={Partners} />
      <Route path='/faq' component={FAQs} />
      <Route path='/team' component={Team} />
      <Route path='/contact' component={Contact} />
      <Route path='/society/:societyName' component={Society} />
      <Route path='/partner/:partnerName' component={Partner} />
      <Redirect to='/' />
    </Switch>
    <Footer />
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
