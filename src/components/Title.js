import React, { useContext } from 'react'
import PortfolioContext from '../context/context';
import { useLocation } from 'react-router-dom';

export default function Title(props) {
  const location = useLocation();
  const { titleData } = useContext(PortfolioContext);
  const h1Style = {
    color: titleData[location.pathname].bg
  }

  return (
    <div className="Title">
      <h1 style={h1Style}>
        {titleData[location.pathname].h1}
      </h1>
    </div>
  )
}
