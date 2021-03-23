import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';

export default function Navigation({ headerData }) {
  const [showNav, setShowNav ] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const renderLinks = (
    headerData.links.map((link) => (
      <NavLink 
        key={link.id}
        exact to={link.path} 
        className="link" 
        activeClassName="activeLink"
        onClick={scrollTop}
      >
        {link.name[0].toUpperCase() + link.name.slice(1)}
      </NavLink>
    ))
  )

  return (
    <div className="Header__navigation">
      <nav 
        className={`Header__navigation__links ${showNav && 'show'}`} 
      >
        <div className="overflow-container">
          {renderLinks}
        </div>
      </nav>
      <nav 
        className={`Header__navigation__links--sidebar ${showNav && 'show'}`} 
      >
        <div className="Header__navigation__links--sidebar__container">
          {renderLinks}
        </div>
      </nav>
      <Hamburger showNav={showNav} setShowNav={() => setShowNav(!showNav)} />
    </div>
  )
}
