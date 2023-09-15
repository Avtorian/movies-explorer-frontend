import React from "react";
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
export default function MoviesCardList(props) {
  const [visibility, setVisibility] = React.useState(true);
  const [movieCards, setMovieCards] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const urlLocation = useLocation();

  React.useEffect(() => {
    if (urlLocation.pathname === "/movies") {
      setMovieCards(props.movieCards.slice(0, index));
      if (props.movieCards.length <= index) {
        setVisibility(false);
      }
      else {
        setVisibility(true);
      }
    }
    else if (urlLocation.pathname === "/saved-movies") {
      setMovieCards(props.movieCards);
    }

  }, [index, props.movieCards, urlLocation.pathname]);

  function showStartCards() {
    if (window.innerWidth > 925) {
      setIndex(12);
    }
    else if (window.innerWidth > 556) {
      setIndex(8);
    }
    else if (window.innerWidth > 0) {
      setIndex(5);
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        showStartCards();
      }, 1000);
    });
  });

  React.useEffect(() => {
    showStartCards();
  }, []);

  function handleShowMore() {
    if (window.innerWidth > 925) {
      setIndex(index + 3);
    }
    else if (window.innerWidth > 556) {
      setIndex(index + 2);
    }
    else if (window.innerWidth > 0) {
      setIndex(index + 2);
    }
  }
  function searchSavedMovieCard(card) {
    if (props.savedMovieCards.find((element) => element.movieId === card.id)) {
      return true;
    }
    else {
      return false
    }
  }
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__cards">
        {movieCards.map((card) => <MoviesCard key={card.id || card.movieId} movieCard={card} onCardDelete={props.onCardDelete} onCardSave={props.onCardSave} searchSavedMovieCard={searchSavedMovieCard} />)}
      </ul>
      {urlLocation.pathname === "/movies" ?
        <div className="movies-card-list__container movies-card-list__container_type_movies">
          <button className={visibility ? "movies-card-list__more-btn" : "movies-card-list__more-btn movies-card-list__more-btn_hide"} onClick={handleShowMore} >Еще</button>
        </div>
        : ""}
      {urlLocation.pathname === "/saved-movies" ?
        <div className="movies-card-list__container movies-card-list__container_type_saved-movies">
        </div>
        : ""}
    </section>
  )
}
