import React from "react";
import './Portfolio.css';
export default function Portfolio(props) {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__links">
                <li className="portfolio__links-item"><a className="portfolio__link" href="https://github.com/Avtorian/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт<p className="portfolio__arrow">&#8599;</p></a></li>
                <li className="portfolio__links-item"><a className="portfolio__link" href="https://avtorian.github.io/russian-travel/" target="_blank" rel="noreferrer">Адаптивный сайт<p className="portfolio__arrow">&#8599;</p></a></li>
                <li className="portfolio__links-item"><a className="portfolio__link" href="https://avtorian.github.io/mesto/" target="_blank" rel="noreferrer">Одностраничное приложение<p className="portfolio__arrow">&#8599;</p></a></li>
            </ul>
            </div>
        </section>
    )
}
