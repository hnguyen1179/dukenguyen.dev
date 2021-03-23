import React, { useContext } from 'react'

import PortfolioContext from '../context/context';
import Title from '../components/Title'
import Footer from '../components/Footer'

export default function About() {
  const { aboutData } = useContext(PortfolioContext);

  return (
    <div className="About page">
      <Title />
      <main className="About__main page__content">
        <section className="About__main__paragraphs">
          {aboutData.paragraphs.map(paragraph => (
            <p 
              className="About__main__paragraphs__paragraph" 
              dangerouslySetInnerHTML={{__html: paragraph}} 
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
