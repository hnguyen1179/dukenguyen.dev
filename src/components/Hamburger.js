import React from 'react'

export default function Hamburger({ showNav, setShowNav }) {
  return (
    <div className={`Hamburger ${showNav && 'show'}`} onClick={setShowNav}>
      <span className="Hamburger__lineOne"/>
      <span className="Hamburger__lineTwo"/>
    </div>
  )
}
