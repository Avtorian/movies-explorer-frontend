import React from "react";
import './Portfolio.css';
export default function Portfolio(props) {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__links">
                <li className="portfolio__links-item">Статичный сайт<a className="portfolio__link" href="https://github.com/Avtorian/how-to-learn" target="_blank" rel="noreferrer">&#8599;</a></li>
                <li className="portfolio__links-item">Адаптивный сайт<a className="portfolio__link" href="https://avtorian.github.io/russian-travel/" target="_blank" rel="noreferrer">&#8599;</a></li>
                <li className="portfolio__links-item">Одностраничное приложение<a className="portfolio__link" href="https://avtorian.github.io/mesto/" target="_blank" rel="noreferrer">&#8599;</a></li>
            </ul>
            </div>
        </section>
    )
}
