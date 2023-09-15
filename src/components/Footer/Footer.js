import React from "react";
import './Footer.css';
export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                <div className="footer__info">
                    <p className="footer__copyright">&copy;2023</p>
                    <nav>
                        <ul className="footer__menu">
                            <li className="footer__menu-item"><a href="https://practicum.yandex.ru/" target="_blank" className="footer__link" rel="noreferrer">Яндекс.Практикум</a></li>
                            <li className="footer__menu-item"><a href="https://github.com/Avtorian" target="_blank" className="footer__link" rel="noreferrer">Github</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
