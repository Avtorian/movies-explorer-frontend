import React from "react";
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Login.css';
import FormValidator from "../../utils/FormValidator";
export default function Login(props) {
    const { values, handleChange, errors, isValid, resetForm } = FormValidator();
    function handleSubmit(e) {
        e.preventDefault();
        const email = values.loginMail;
        const password = values.loginPass;
        props.onLogin({password, email});
        resetForm();
    }
    return (
        <main>
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
                        className={errors.loginMail ? "login__input-text login__input-text_type_email login__input-text_error": "login__input-text login__input-text_type_email"}
                        required
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        minLength="5"
                        maxLength="40"
                        onChange={handleChange}
                    />
                    <span className="login__error">{errors.loginMail}</span>
                    <label className="login__label" htmlFor="loginPass-input">Пароль</label>
                    <input
                        id="loginPass-input"
                        name="loginPass"
                        type="password"
                        placeholder="Пароль"
                        className={errors.loginPass ? "login__input-text login__input-text_type_pass login__input-text_error": "login__input-text login__input-text_type_pass"}
                        required
                        minLength="5"
                        maxLength="40"
                        onChange={handleChange}
                    />
                    <span className="login__error">{errors.loginPass}</span>
                    
                    <div className="login__submit-container">
                        <span className={props.isLoginValueNotification.state === 'Успешно' ? "login__submit-error login__submit-error_successfull" : "login__submit-error"}>{props.isLoginValueNotification.title}</span>
                    <button
                        type="submit"
                        className={isValid ? "login__submit-btn" : "login__submit-btn login__submit-btn_disabled"}
                        disabled={!isValid}
                    >
                        Войти
                    </button>
                    </div>
                </form>
                <p className="login__text">Еще не зарегистрированы? <Link to="/signup" className="login__entry">Регистрация</Link></p>
            </div>
        </main>
    )
}