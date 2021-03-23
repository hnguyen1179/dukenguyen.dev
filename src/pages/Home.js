import React, { useContext } from 'react';

import Footer from '../components/Footer';

import PortfolioContext from '../context/context';

export default function Home() {
  const { homeData } = useContext(PortfolioContext);

  return (
    <div className="Home page">
      <div className="Home__title">
        <div className="Home__title__container">
          <img 
            draggable={false} 
            className="svg" 
            alt="Duke Nguyen"
            src={homeData.images.nameSvg} 
          />
          <div className="image-container">
            <img src={homeData.images.portrait} alt="picture of Duke Nguyen"/>
          </div>
        </div>
      </div>
      <main className="Home__main page__content">
        <section>
          {homeData.paragraphs.map(paragraph => (
            <p className="Home__main__paragraph" key={paragraph.length}> 
              {paragraph} 
            </p>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
