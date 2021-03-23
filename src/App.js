import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Header from './components/Header';

import PortfolioContext from './context/context';
import { 
  headerData, 
  titleData,
  homeData,
  aboutData, 
  projectsData, 
  contactData, 
  footerData 
} from './mock/data'; 

import './components/FontAwesomeIcons';
import './stylesheets/main.scss';

export default function App(props) {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  return (
    <PortfolioContext.Provider 
      value={{ 
        headerData,
        titleData, 
        homeData, 
        aboutData, 
        projectsData, 
        contactData, 
        footerData,
      }} 
    >
      <div className="App">
        <div className="App__bar App__bar--top" />
        <div className="App__bar App__bar--bottom" />
        <div className="App__bar App__bar--left" />

        <Header />

        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            timeout={600}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </PortfolioContext.Provider>
  )
}

