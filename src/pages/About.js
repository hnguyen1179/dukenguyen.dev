
import React, { useState, useEffect, useContext } from 'react'
import PortfolioContext from '../context/context';
import Title from '../components/Title'
import Footer from '../components/Footer'
import APPController from '../utility/spotifyApi';

export default function About() {
  const { aboutData } = useContext(PortfolioContext);
  const [artists, setArtists] = useState('uhhhhh');
  const [albumCovers, setAlbumCovers] = useState([]);

  useEffect(() => {
    try {
      const artists = APPController.getData();
      const nextAlbumCovers = [];
      artists.then(results => {
        const threeArtists = new Set();
        while (threeArtists.size < 4) {
          const randomNum = Math.floor(Math.random() * results.length);
          const artistName = results[randomNum].track.artists[0].name;
          const track = results[randomNum].track;
          if (canPush(track, nextAlbumCovers)) {
            nextAlbumCovers.push(track);
          }
          threeArtists.add(artistName);
        }
        const str = Array.from(threeArtists)
        str[3] = 'and ' + str[3]
        setAlbumCovers(nextAlbumCovers);
        setArtists(str.join(', '));
      })
    } catch(e) {
      setArtists('uhhh, I can\'t think right now');
    }
  }, [])

  const canPush = (track, albumArray) => {
    const duplicateArtists = albumArray.filter(albumItem => { 
      return albumItem.artists[0].name === track.artists[0].name
    })
    return duplicateArtists.length === 0;
  } 

  const renderOutdoors = (
    aboutData.images.paragraphOne.map(image => (
      <img src={image.url} alt={image.alt} />
    ))
  );

  const renderAlbumCovers = (
    albumCovers.map(track => <img src={track.album.images[0].url} /> )
  );

  const renderBooksAndMovies = (
    aboutData.images.paragraphThree.map(image => (
      <img src={image.url} alt={image.alt} />
    ))
  );

  return (
    <div className="About page">
      <Title />
      <main className="About__main page__content">
        <section className="About__main__paragraphs">
          {aboutData.paragraphs.map((paragraph, idx) => (
            <div className={`About__main__paragraphs__content About__main__paragraphs__content--${idx}`}>
              <p 
                key={paragraph.length}
                className={`About__main__paragraphs__content__paragraph About__main__paragraphs__content__paragraph--${idx}`} 
                dangerouslySetInnerHTML={{__html: paragraph.replace(/\{artists\}/,
                  artists)
                }} 
              />
              <div className={`About__main__paragraphs__content__media About__main__paragraphs__content__media--${idx}`}>
                {idx === 0 ? renderOutdoors : null}
                {idx === 1 ? renderAlbumCovers : null}
                {idx === 2 ? renderBooksAndMovies : null}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
