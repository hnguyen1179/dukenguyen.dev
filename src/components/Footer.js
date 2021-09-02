import React, { useContext } from "react";
import { motion } from "framer-motion";

import PortfolioContext from "../context/context";

export default function Footer({ introEffect }) {
	const { footerData } = useContext(PortfolioContext);
	const renderLinks = footerData.networks.map((link) => (
		<a key={link.id} href={link.url} target="_blank" rel="noreferrer">
			<div className={`Footer__icon Footer__icon--${link.name}`}>
				{link.nameProper}
			</div>
		</a>
	));

	return (
		<motion.footer
			className="Footer"
			initial={{
				opacity: introEffect ? 0 : 1,
				// backgroundColor: "#e9dfd8",
				zIndex: 30,
			}}
			animate={{
				// color: "#af4818",
        opacity: 1,
				zIndex: 0,
				transitionDelay: "1.25s",
				transitionDuration: "0.8s",
			}}
		>
			<div className="Footer__link-container">{renderLinks}</div>
		</motion.footer>
	);
}
