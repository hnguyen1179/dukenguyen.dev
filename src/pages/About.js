
import React, { useState, useEffect, useContext } from 'react'
import PortfolioContext from '../context/context';
import Title from '../components/Title'
import Footer from '../components/Footer'
import APPController from '../utility/spotifyApi';

export default function About() {
  const { aboutData } = useContext(PortfolioContext);
  const [artists, setArtists] = useState('');

  useEffect(() => {
    const artists = APPController.getData()
    artists.then(results => {
      const threeArtists = new Set();
      while (threeArtists.size < 3) {
        const randomNum = Math.floor(Math.random() * results.length);
        threeArtists.add(results[randomNum].track.artists[0].name);
      }
      const str = Array.from(threeArtists).join(', ')
      setArtists(str);
    })
  }, [])

  return (
    <div className="About page">
      <Title />
      <main className="About__main page__content">
        <section className="About__main__paragraphs">
          {aboutData.paragraphs.map(paragraph => (
            <p 
              key={paragraph.length}
              className="About__main__paragraphs__paragraph" 
              dangerouslySetInnerHTML={{__html: paragraph.replace(/\{artists\}/,
                artists)
              }} 
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
