import React from "react";
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Register.css';
export default function Register(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister();
    }
    return (
        <div className="register">
            <form name="register" className="register__form" noValidate="" onSubmit={handleSubmit}>
                <Link to="/" className='register__logo-link'>
                    <img
                        src={logoPath}
                        alt="Логотип"
                        className="register__logo"
                    />
                </Link>
                <h1 className="register__title">Добро пожаловать!</h1>
                <label className="register__label" htmlFor="registerName-input">Имя</label>
                <input
                    id="registerName-input"
                    name="registerName"
                    type="text"
                    placeholder="Имя"
                    className="register__input-text register__input-text_type_name"
                    required
                    minLength="2"
                    maxLength="40"
                />
                <span className="register__error"></span>
                <label className="register__label" htmlFor="registerMail-input">E-mail</label>
                <input
                    id="registerMail-input"
                    name="registerMail"
                    type="email"
                    placeholder="E-mail"
                    className="register__input-text register__input-text_type_email"
                    required
                    minLength="5"
                    maxLength="40"
                />
                <span className="register__error"></span>
                <label className="register__label" htmlFor="registerPass-input">Пароль</label>
                <input
                    id="registerPass-input"
                    name="registerPass"
                    type="password"
                    placeholder="Пароль"
                    className="register__input-text register__input-text_type_pass"
                    required
                    minLength="5"
                    maxLength="40"
                />
                <span className="register__error">Что-то пошло не так...</span>
                <button
                    type="submit"
                    className="register__submit-btn"
                >
                    Зарегистрироваться
                </button>
            </form>
            <p className="register__text">Уже зарегистрированы? <Link to="/signin" className="register__entry">Войти</Link></p>
        </div>

    )
}