import React, { useContext } from "react";
import PortfolioContext from "../context/context";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function About() {
	const { aboutData } = useContext(PortfolioContext);

	const renderOutdoors = aboutData.images.paragraphOne.map((image) => (
		<img key={image.alt} src={image.url} alt={image.alt} />
	));

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
									__html: paragraph
								}}
							/>
							<div
								className={`About__main__paragraphs__content__media About__main__paragraphs__content__media--${idx}`}
							>
								{idx === 1 ? renderOutdoors : null}
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
