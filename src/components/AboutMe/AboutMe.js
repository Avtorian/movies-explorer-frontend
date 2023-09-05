import React from "react";
import './AboutMe.css';
import photoPath from '../../images/student.png'
import Portfolio from "../Portfolio/Portfolio";
export default function AboutMe(props) {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">Студент</h2>
                <div className="about-me__student">
                    <div className="about-me__info">
                        <h3 className="about-me__name">Виталий</h3>
                        <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__history">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <ul className="about-me__links">
                            <li className="about-me__links-item"><a className="about-me__link" href="https://github.com/Avtorian" target="_blank" rel="noreferrer">Github</a></li>
                        </ul>
                    </div>
                    <img className="about-me__photo" alt="Фотография" src={photoPath}></img>
                </div>
            </div>
            <Portfolio />
        </section>
    )
}
