import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PortfolioContext from '../context/context';

export default function Footer() {
  const { footerData } = useContext(PortfolioContext);
  const renderLinks = (
    footerData.networks.map(link => (
      <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
        <div className={`Footer__icon Footer__icon--${link.name}`}>
          {link.nameProper}
        </div>
      </a> 
    ))
  )

  return (
    <footer className="Footer">
      <div className="Footer__link-container">
        {renderLinks}
      </div>
    </footer>
  )
}
