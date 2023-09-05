import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
export default function SearchForm(props) {
  return (
    <>  
      <section className="search-form">
        <form className="search-form__input">
          <input
            id="search-form-input"
            name="searchForm"
            type="text"
            placeholder="Фильм"
            className="search-form__input-text"
            required=""
          />
          <button className="search-form__submit-btn" type="submit"></button>
        </form>
        <FilterCheckbox/>
      </section>
    </>
  )
}
