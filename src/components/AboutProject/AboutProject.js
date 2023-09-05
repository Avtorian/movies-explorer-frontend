import React from "react";
import './AboutProject.css';
export default function AboutProject(props) {
    return (
        <section className="about-project" id="about-project">
            <div className="about-project__container">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__diplom">
                <div className="about-project__diplom-container">
                    <h3 className="about-project__diplom-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__diplom-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__diplom-container">
                    <h3 className="about-project__diplom-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__diplom-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__progress">
                <div className="about-project__back">
                    <div className="about-project__progress-title about-project__progress-title_color_green">1 неделя</div>
                    <div className="about-project__progress-subtitle">Back-end</div>
                </div>
                <div className="about-project__front">
                    <div className="about-project__progress-title about-project__progress-title_color_grey">4 недели</div>
                    <div className="about-project__progress-subtitle">Front-end</div>
                </div>
            </div>
            </div>
        </section>
    )
}
