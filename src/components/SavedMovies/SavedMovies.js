import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader"
import { searchFilter } from "../../utils/filters"
import SearchError from "../SearchError/SearchError";

export default function SavedMovies(props) {
  const [filterTextMovies, setFilterTextMovies] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filterShortMovies, setFilterShortMovies] = React.useState(false);
  const [searched, setSearched] = React.useState(false);

  React.useEffect(() => {
    props.getSavedMovies();
  }, [])
  
  React.useEffect(() => {
    if (filteredMovies.length === 0) {
      props.setIsErrorValue('Ничего не найдено');
    }
    else {
      props.setIsErrorValue('');
    }
  }, [filteredMovies]);

  React.useEffect(() => {
    setFilteredMovies(searchFilter(filterTextMovies, props.savedMovieCards, filterShortMovies));
  }, [filterTextMovies, filterShortMovies, props.savedMovieCards]);

  return (
    <main>
      <SearchForm setFilterTextMovies={setFilterTextMovies} filterTextMovies={filterTextMovies} filterShortMovies={filterShortMovies} setFilterShortMovies={setFilterShortMovies} setSearched={setSearched} />
      {props.isPreloader ? <Preloader /> : searched ? filteredMovies.length ? <MoviesCardList movieCards={filteredMovies} onCardDelete={props.onCardDelete}/> : <SearchError isErrorValue={props.isErrorValue} /> : <MoviesCardList movieCards={props.savedMovieCards} onCardDelete={props.onCardDelete}/>}
    </main>
  )
}
