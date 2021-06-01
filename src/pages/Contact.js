import React, { useContext } from "react";

import Title from "../components/Title";
import Footer from "../components/Footer";
import PortfolioContext from "../context/context";

export default function Contact() {
    const { contactData } = useContext(PortfolioContext);

    return (
        <div className="Contact page">
            <Title />
            <main className="Contact__main page__content">
                <h1 className="Contact__main__cta">
                    {contactData.cta1} <br></br>
                    <a href={`mailto: ${contactData.email}`}>
                        {contactData.email}
                    </a>
                    <br></br> {contactData.cta2}
                </h1>
            </main>
            <Footer />
        </div>
    );
}
