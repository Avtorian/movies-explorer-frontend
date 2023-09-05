import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import './Navigation.css';
import Burger from "../Burger/Burger";
export default function Navigation(props) {
  const urlLocation = useLocation();
  return (
    <>
      {!props.loggedIn &&
        <ul className="navigation__links navigation__links_active">
          <li className="navigation__link"><Link to="/signup" className='navigation_link-signup'>Регистриция</Link></li>
          <li className="navigation__link"><Link to="/signin" className='navigation_link-signin'>Войти</Link></li>
        </ul>
      }
      {props.loggedIn &&
        <>
          <Burger />
          <ul className="navigation__menu">
            <li className="navigation__menu-item"><NavLink to="/movies" className={urlLocation.pathname === "/movies" ? "navigation__menu-link navigation__menu-link_active" : "navigation__menu-link"}>Фильмы</NavLink></li>
            <li className="navigation__menu-item"><NavLink to="/saved-movies" className={urlLocation.pathname === "/saved-movies" ? "navigation__menu-link navigation__menu-link_active" : "navigation__menu-link"}>Сохранённые фильмы</NavLink></li>
          </ul>

          <ul className="navigation__links">
            <li className="navigation__link"><Link to="/profile" className='navigation_link-account'>Аккаунт</Link></li>
          </ul>
        </>
      }

    </>
  )
}
