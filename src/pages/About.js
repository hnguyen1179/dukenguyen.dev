import React, { useState, useEffect, useContext } from "react";
import PortfolioContext from "../context/context";
import Title from "../components/Title";
import Footer from "../components/Footer";
import APPController from "../utility/spotifyApi";

export default function About() {
    const { aboutData } = useContext(PortfolioContext);
    const [artists, setArtists] = useState("uhhhhh");
    const [albumCovers, setAlbumCovers] = useState([]);

    useEffect(() => {
        try {
            const getData = async () => {
                const [topTracks, topArtists] = await APPController.getData();
                
                // Setting up top artists
                const topArtistNames = topArtists.map(obj => obj.name);
                topArtistNames[3] = "and " + topArtistNames[3] + ".";
                const formattedArtists = topArtistNames.join(", ")
                setArtists(formattedArtists);
    
                // Setting up top tracks
                setAlbumCovers(topTracks);
            }

            getData();
        } catch (e) {
            setArtists("uhhh, I can't think right now. (My code's erroring out! I'll fix this soon)");
        }
    }, []);

    const renderOutdoors = aboutData.images.paragraphOne.map((image) => (
        <img key={image.alt} src={image.url} alt={image.alt} />
    ));

    const renderAlbumCovers = albumCovers.map((track) => {
        return (
            <a
                href={track.external_urls.spotify}
                target="_blank" key={track.album.name}
                rel="noreferrer"
            >
                <img
                    src={track.album.images[0].url}
                    alt={`${track.album.name}'s Album Cover`}
                />
            </a>
        );
    });

    const renderBooksAndMovies = aboutData.images.paragraphThree.map(
        (image) => <img key={image.alt} src={image.url} alt={image.alt} />
    );

    return (
        <div className="About page">
            <Title />
            <main className="About__main page__content">
                <section className="About__main__paragraphs">
                    {aboutData.paragraphs.map((paragraph, idx) => (
                        <div
                            key={idx}
                            className={`About__main__paragraphs__content About__main__paragraphs__content--${idx}`}
                        >
                            <p
                                key={paragraph.length}
                                className={`About__main__paragraphs__content__paragraph About__main__paragraphs__content__paragraph--${idx}`}
                                dangerouslySetInnerHTML={{
                                    // __html: paragraph,
                                    __html: paragraph.replace(
                                        /\{artists\}/,
                                        artists
                                    ),
                                }}
                            />
                            <div
                                className={`About__main__paragraphs__content__media About__main__paragraphs__content__media--${idx}`}
                            >
                                {idx === 1 ? renderOutdoors : null}
                                {idx === 2 ? renderAlbumCovers : null}
                                {idx === 3 ? renderBooksAndMovies : null}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}
