import React from "react";
import './MoviesCardList.css';
import MovieCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
export default function MoviesCardList(props) {
  const urlLocation = useLocation();
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__cards">
        <MovieCard saved={true} src="https://i.imgur.com/n2mb5mg.png" nameRU="33 слова о дизайне" duration="1ч 17м" />
        <MovieCard saved={true} src="https://i.imgur.com/L3cgPzW.png" nameRU="Киноальманах «100 лет дизайна»" duration="1ч 17м" />
        <MovieCard saved={true} src="https://i.imgur.com/lfxxzSL.png" nameRU="В погоне за Бенкси" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/oYVOGdZ.png" nameRU="Баския: Взрыв реальности" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/RVMS4t2.png" nameRU="Бег это свобода" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/d69Ca81.png" nameRU="Книготорговцы" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/34k5qVr.png" nameRU="Когда я думаю о Германии ночью" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/qnldxDa.png" nameRU="Gimme Danger: История Игги и The Stooges" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/i5XobG2.png" nameRU="Дженис: Маленькая девочка грустит" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/ldfSX3g.png" nameRU="Соберись перед прыжком" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/PkrUqbv.png" nameRU="Пи Джей Харви: A dog called money" duration="1ч 17м" />
        <MovieCard src="https://i.imgur.com/xdh7hnd.png" nameRU="По волнам: Искусство звука в кино" duration="1ч 17м" />
      </ul>
      {urlLocation.pathname === "/movies" ?
        <div className="movies-card-list__container movies-card-list__container_type_movies">
          <button className="movies-card-list__more-btn">Еще</button>
        </div>
        : ""}
      {urlLocation.pathname === "/saved-movies" ?
        <div className="movies-card-list__container movies-card-list__container_type_saved-movies">
        </div>
        : ""}
    </section>
  )
}
