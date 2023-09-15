import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { searchFilter } from "../../utils/filters"
import Preloader from "../Preloader/Preloader"
import SearchError from "../SearchError/SearchError";

export default function Movies(props) {
  const [filterTextMovies, setFilterTextMovies] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filterShortMovies, setFilterShortMovies] = React.useState(false);
  const [searched, setSearched] = React.useState(false);

  React.useEffect(() => {
      setFilteredMovies(searchFilter(filterTextMovies, props.movieCards, filterShortMovies));      
        props.setSavedSearchWord(filterTextMovies);      
        props.setSavedSearchShort(filterShortMovies);
  }, [filterShortMovies, filterTextMovies, props.movieCards]);

  React.useEffect(() => {
    if (filteredMovies) {
      props.setIsErrorValue('Ничего не найдено');
    }
    else {
      props.setIsErrorValue('');
    }
  }, [filteredMovies, props]);
  React.useEffect(() => {
    if(props.savedSearchWord || props.savedSearchShort){
      setSearched(true);
      setFilterTextMovies(props.savedSearchWord);
      setFilterShortMovies(props.savedSearchShort);
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('savedMovieCards', JSON.stringify(props.savedMovieCards));
    localStorage.setItem('filterTextMovies', JSON.stringify(filterTextMovies));
    localStorage.setItem('filterShortMovies', JSON.stringify(filterShortMovies));
    localStorage.setItem('moviesCards', JSON.stringify(props.movieCards));
  }, [filterTextMovies, filterShortMovies, props.movieCards, props.savedMovieCards])
  return (
    <main>
      <SearchForm setFilterTextMovies={setFilterTextMovies} filterTextMovies={filterTextMovies} filterShortMovies={filterShortMovies} setFilterShortMovies={setFilterShortMovies} handleSubmitSearch={props.handleSubmitSearch} setSearched={setSearched} />
      {props.isPreloader ? <Preloader /> : filteredMovies.length ? <MoviesCardList movieCards={filteredMovies} savedMovieCards={props.savedMovieCards} onCardDelete={props.onCardDelete} onCardSave={props.onCardSave} /> : searched ? <SearchError isErrorValue={props.isErrorValue} /> : ""}
    </main>
  )
}
