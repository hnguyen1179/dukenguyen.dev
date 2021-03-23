import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';

export default function Navigation({ headerData }) {
  const [showNav, setShowNav ] = useState(false);

  const handleClickLink = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleBodyClick = (e) => {
    const closeNavigation = new Event('closeNavigation');
    window.dispatchEvent(closeNavigation);
  }

  const handleCloseNavigation = (e) => {
    setShowNav(false);
  }

  const handleOpenNavigation = (e) => {
    e.stopPropagation();
    setShowNav(!showNav);
  }

  useEffect(() => {
    window.addEventListener('closeNavigation', handleCloseNavigation);
    document.body.addEventListener('click', handleBodyClick)

    return () => {
      window.removeEventListener('closeNavigation', handleCloseNavigation);
      document.body.removeEventListener('click', handleBodyClick)
    }
  }, [])

  const renderLinks = (
    headerData.links.map((link) => (
      <NavLink 
        key={link.id}
        exact to={link.path} 
        className="link" 
        activeClassName="activeLink"
        onClick={handleClickLink}
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
      <Hamburger showNav={showNav} handleOpenNavigation={handleOpenNavigation} />
    </div>
  )
}
