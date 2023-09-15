import React from "react";
import './SearchForm.css';
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
export default function SearchForm(props) {
  const urlLocation = useLocation();
  const [isError, setIsError] = React.useState(false);
  const [inputSearchValue, setInputSearchValue] = React.useState('');
  React.useEffect(()=>{
    setInputSearchValue(props.filterTextMovies);
  },[props.filterTextMovies])
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputSearchValue) {
      setIsError(true);
    }
    else {
      //Если слово введено
      setIsError(false);
      props.setFilterTextMovies(inputSearchValue);
      if(urlLocation.pathname === "/movies")
      {
        props.setSearched(true);
        props.handleSubmitSearch();
      }
      else if(urlLocation.pathname === "/saved-movies"){
        props.setSearched(true);
      }
    }
  }
  function handleChange(e){
    setInputSearchValue(e.target.value);
  }
  return (
    <>
      <section className="search-form">
        <form className="search-form__input" onSubmit={handleSubmit}>
          <input
            id="search-form-input"
            name="searchForm"
            type="text"
            placeholder="Фильм"
            className="search-form__input-text"
            required=""
            value={inputSearchValue || ''}
            onChange={handleChange}
          />
          <span className={isError? "search-form__error search-form__error_active" : "search-form__error"}>{isError ? "Нужно ввести ключевое слово" : ""}</span>
          <button className="search-form__submit-btn" type="submit"></button>
        </form>
        <FilterCheckbox setFilterShortMovies={props.setFilterShortMovies} filterShortMovies={props.filterShortMovies} setSearched={props.setSearched}/>
      </section>
    </>
  )
}
