import React, { useContext } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";

import PortfolioContext from "../context/context";

export default function Header({ initialHomeLoad }) {
	const { headerData } = useContext(PortfolioContext);
	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<motion.header
			initial={{
				opacity: initialHomeLoad ? 0 : 1,
			}}
			animate={{
				opacity: 1,
				transitionProperty: "opacity",
				transitionDelay: initialHomeLoad ? "1.25s" : "0s",
				transitionDuration: "0.8s",
			}}
			className="Header"
		>
			<NavLink
				exact
				to="/"
				activeClassName="activeLink"
				onClick={scrollTop}
			>
				<img
					className="Header__logo"
					src={headerData.images.logo}
					alt="portfolio site logo"
				/>
			</NavLink>
			<Navigation headerData={headerData} />
		</motion.header>
	);
}
