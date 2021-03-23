import React from 'react'

export default function Hamburger({ showNav, handleOpenNavigation }) {
  return (
    <div className={`Hamburger ${showNav && 'show'}`} onClick={handleOpenNavigation}>
      <span className="Hamburger__lineOne"/>
      <span className="Hamburger__lineTwo"/>
    </div>
  )
}
