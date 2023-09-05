import React from 'react';
import logoPath from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="header">
      <Link to="/" className='header__logo-link'>
      <img
        src={logoPath}
        alt="Логотип"
        className="header__logo"
      />
      </Link>
      <Navigation loggedIn={props.loggedIn}/>
    </header>
  )
}
