import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import PortfolioContext from "../context/context";

export default function Home({ setInitialHomeLoad }) {
	const { homeData } = useContext(PortfolioContext);
	const introEffect = "initialLoad" in sessionStorage ? false : true;

	const transition = { duration: 1.1, ease: "easeInOut" };

	useEffect(() => {
		if (!("initialLoad" in sessionStorage)) {
			sessionStorage.setItem("initialLoad", true);
		}
	}, [setInitialHomeLoad]);

	return (
		<div className="Home page">
			<motion.div
				initial={{ y: "110%" }}
				animate={{ y: "0%" }}
				transition={introEffect ? transition : { duration: 0 }}
				className="Home__title"
			>
				<div className="Home__title__container">
					<img
						draggable={false}
						className="svg"
						alt="Duke Nguyen"
						src={homeData.images.nameSvg}
					/>
					<div className="image-container">
						<img
							src={homeData.images.portrait}
							alt="Duke Nguyen Portrait"
						/>
					</div>
				</div>
			</motion.div>
			<motion.main
				initial={{
					color: introEffect ? "#e9dfd8" : "#af4818",
					backgroundColor: "#e9dfd8",
					zIndex: 30,
				}}
				animate={{
					color: "#af4818",
					zIndex: 0,
					transitionDelay: "1.25s",
					transitionDuration: "0.8s",
				}}
				className="Home__main page__content"
			>
				<h1 style={{ display: "none" }}>Duke Nguyen</h1>
				<section>
					{homeData.paragraphs.map((paragraph) => (
						<p className="Home__main__paragraph" key={paragraph[5]}>
							{paragraph}
						</p>
					))}
				</section>
			</motion.main>

			<Footer introEffect={introEffect} />
		</div>
	);
}
