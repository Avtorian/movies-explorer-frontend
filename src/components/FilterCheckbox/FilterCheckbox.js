import React from "react";
import './FilterCheckbox.css';
export default function FilterCheckbox(props) {
  return (
    <>  
      <div className="filter-checkbox">
        <input className="filter-checkbox__input" type="checkbox" id="filter-checkbox"/>
        <label className="filter-checkbox__title" htmlFor="filter-checkbox">Короткометражки</label>
      </div>
    </>
  )
}
