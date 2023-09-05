import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
export default function MoviesCard(props) {
    
  const urlLocation = useLocation();
    return (
        <>
            <li className="movies-card">
                <img
                    src={props.src}
                    alt={props.nameRU}
                    className="movies-card__image"
                />
                <div className="movies-card__container">
                    <h2 className="movies-card__title">{props.nameRU}</h2>
                    <p className="movies-card__time">{props.duration}</p>
                </div>
                {urlLocation.pathname === "/movies" && <button className={props.saved ? "movies-card__btn movies-card__btn_saved" : "movies-card__btn"}>{props.saved ? "" : "Сохранить"}</button>}
                {urlLocation.pathname === "/saved-movies" && <button className="movies-card__btn movies-card__btn_delete"></button>}
                
            </li>
        </>
    )
}
