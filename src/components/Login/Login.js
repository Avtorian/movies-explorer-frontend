import React from "react";
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Login.css';
export default function Login(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin();
    }
    return (
        <div className="login">
            <form name="login" className="login__form" noValidate="" onSubmit={handleSubmit}>
                <Link to="/" className='login__logo-link'>
                    <img
                        src={logoPath}
                        alt="Логотип"
                        className="login__logo"
                    />
                </Link>
                <h1 className="login__title">Рады видеть!</h1>
                <label className="login__label" htmlFor="loginMail-input">E-mail</label>
                <input
                    id="loginMail-input"
                    name="loginMail"
                    type="email"
                    placeholder="E-mail"
                    className="login__input-text login__input-text_type_email"
                    required
                    minLength="5"
                    maxLength="40"
                />
                <span className="login__error"></span>
                <label className="login__label" htmlFor="loginPass-input">Пароль</label>
                <input
                    id="loginPass-input"
                    name="loginPass"
                    type="password"
                    placeholder="Пароль"
                    className="login__input-text login__input-text_type_pass"
                    required
                    minLength="5"
                    maxLength="40"
                />
                <span className="login__error"></span>
                <button
                    type="submit"
                    className="login__submit-btn"
                >
                    Войти
                </button>
            </form>
            <p className="login__text">Еще не зарегистрированы? <Link to="/signup" className="login__entry">Регистрация</Link></p>
        </div>

    )
}