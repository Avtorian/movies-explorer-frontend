import React from "react";
import './NavTab.css';
export default function NavTab(props) {
    return (
        <nav className="nav-tab">
            <ul className="nav-tab__menu">
                <li className="nav-tab__menu-item"><a href="#about-project" className="nav-tab__menu-link">О проекте</a></li>
                <li className="nav-tab__menu-item"><a href="#techs" className="nav-tab__menu-link">Технологии</a></li>
                <li className="nav-tab__menu-item"><a href="#about-me" className="nav-tab__menu-link">Студент</a></li>
            </ul>
        </nav>
    )
}
