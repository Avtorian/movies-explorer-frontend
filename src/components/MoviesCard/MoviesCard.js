import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";
import countingDuration from "../../utils/countingDuration";
export default function MoviesCard(props) {
    const urlLocation = useLocation();
    let isSaved;
    if (urlLocation.pathname === "/movies") {
        isSaved = props.searchSavedMovieCard(props.movieCard);
    }
    function handleCardDelete() {
        if (props.movieCard.id) {
            props.onCardDelete(props.movieCard.id);
        }
        else if (props.movieCard.movieId) {
            props.onCardDelete(props.movieCard.movieId);
        }
    }
    function handleCardSave() {
        props.onCardSave(props.movieCard);
    }
    return (
        <>
            <li className="movies-card">
                <a className="movies-card__link" href={props.movieCard.trailerLink} target="_blank" rel="noreferrer">
                    <img
                        src={"https://api.nomoreparties.co" + (props.movieCard.image.url ? props.movieCard.image.url : props.movieCard.image)}
                        alt={props.movieCard.nameRU}
                        className="movies-card__image"
                    />

                    <div className="movies-card__container">
                        <h2 className="movies-card__title">{props.movieCard.nameRU}</h2>
                        <p className="movies-card__time">{countingDuration(props.movieCard.duration)}</p>
                    </div>
                </a>
                {urlLocation.pathname === "/movies" && <button onClick={isSaved ? handleCardDelete : handleCardSave} className={isSaved ? "movies-card__btn movies-card__btn_saved" : "movies-card__btn"}>{isSaved ? "" : "Сохранить"}</button>}
                {urlLocation.pathname === "/saved-movies" && <button onClick={handleCardDelete} className="movies-card__btn movies-card__btn_delete"></button>}

            </li>
        </>
    )
}
