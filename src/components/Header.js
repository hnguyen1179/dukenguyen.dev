import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';


export default function Header() {
  const { headerData } = useContext(PortfolioContext);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <header className="Header">
      <NavLink exact to="/" activeClassName="activeLink" onClick={scrollTop}>
        <img 
          className="Header__logo"
          src={headerData.images.logo}
          alt="portfolio site logo" 
        />
      </NavLink>
      <Navigation headerData={headerData} />
    </header>
  )
}
