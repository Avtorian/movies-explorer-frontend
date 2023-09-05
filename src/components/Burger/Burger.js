import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './Burger.css';
export default function Burger(props) {

  const urlLocation = useLocation();
  const [burgerOpen, setBurgerDisplay] = React.useState(false);
  function openBurger() {
    setBurgerDisplay(true);
  }
  function closeBurger() {
    setBurgerDisplay(false);
  }

  return (
    <div className="burger">
      <button type="button" className="burger__open-btn" onClick={openBurger} />
      <div className={burgerOpen === true ? "burger__container burger__container_open" : "burger__container"}>
        <nav className="burger__navigation">
          <button type="button" className="burger__close-btn" onClick={closeBurger} />
          <ul className="burger__menu">
            <li className="burger__menu-item"><NavLink onClick={closeBurger} to="/" className={urlLocation.pathname === "/" ? "burger__menu-link burger__menu-link_active" : "burger__menu-link"}>Главная</NavLink></li>
            <li className="burger__menu-item"><NavLink onClick={closeBurger} to="/movies" className={urlLocation.pathname === "/movies" ? "burger__menu-link burger__menu-link_active" : "burger__menu-link"}>Фильмы</NavLink></li>
            <li className="burger__menu-item"><NavLink onClick={closeBurger} to="/saved-movies" className={urlLocation.pathname === "/saved-movies" ? "burger__menu-link burger__menu-link_active" : "burger__menu-link"}>Сохранённые фильмы</NavLink></li>
          </ul>

          <ul className="burger__links">
            <li className="burger__link"><Link onClick={closeBurger} to="/profile" className='burger__link-account'>Аккаунт</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
