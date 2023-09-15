import React from "react";
import './FilterCheckbox.css';
export default function FilterCheckbox(props) {
  function setFilterShortsMovies(){
    props.setFilterShortMovies(!props.filterShortMovies);
    props.setSearched(true);
  }
  return (
    <>  
      <div className="filter-checkbox">
        <input className="filter-checkbox__input" type="checkbox" id="filter-checkbox" checked={props.filterShortMovies} onChange={setFilterShortsMovies}/>
        <label className="filter-checkbox__title" htmlFor="filter-checkbox">Короткометражки</label>
      </div>
    </>
  )
}
