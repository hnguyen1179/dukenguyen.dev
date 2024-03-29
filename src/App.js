import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Hidden from "./pages/Hidden";

import Header from "./components/Header";

import PortfolioContext from "./context/context";
import {
	headerData,
	titleData,
	homeData,
	aboutData,
	projectsData,
	contactData,
	footerData,
} from "./mock/data";

import "./stylesheets/main.scss";

export default function App() {
	const location = useLocation();
	const initialHomeLoad = "initialLoad" in sessionStorage ? false : true;

	window.onbeforeunload = function () {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<PortfolioContext.Provider
			value={{
				headerData,
				titleData,
				homeData,
				aboutData,
				projectsData,
				contactData,
				footerData,
			}}
		>
			<div className="App">
				<div className="App__bar App__bar--top" />
				<div className="App__bar App__bar--bottom" />
				<div className="App__bar App__bar--left" />

				<Header initialHomeLoad={initialHomeLoad} />

				<TransitionGroup component={null}>
					<CSSTransition
						key={location.key}
						timeout={600}
						classNames="fade"
					>
						<Switch location={location}>
							<Route exact path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/projects" component={Projects} />
							<Route path="/contact" component={Contact} />
							<Route path="/hidden" component={Hidden} />
							<Route render={() => <Redirect to="/" />} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</PortfolioContext.Provider>
	);
}
