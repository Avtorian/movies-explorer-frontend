import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
export default function SavedMovies(props) {
  return (
    <main>
        <SearchForm />
        <MoviesCardList />
    </main>
  )
}
