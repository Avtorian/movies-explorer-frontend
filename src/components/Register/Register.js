import React from "react";
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Register.css';
import FormValidator from "../../utils/FormValidator";
export default function Register(props) {
    const { values, handleChange, errors, isValid } = FormValidator();
    function handleSubmit(e) {
        e.preventDefault();
        const email = values.registerMail;
        const password = values.registerPass;
        const name = values.registerName;
        props.onRegister({ password, email, name });
    }
    return (
        <main>
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
                        className={errors.registerName ? "register__input-text register__input-text_type_name register__input-text_error": "register__input-text register__input-text_type_name"}
                        required
                        pattern="^[A-Za-zА-Яа-я\s\-]+$"
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                    />
                    <span className="register__error">{errors.registerName}</span>
                    <label className="register__label" htmlFor="registerMail-input">E-mail</label>
                    <input
                        id="registerMail-input"
                        name="registerMail"
                        type="email"
                        placeholder="E-mail"
                        className={errors.registerMail ? "register__input-text register__input-text_type_email register__input-text_error": "register__input-text register__input-text_type_email"}
                        required
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        minLength="5"
                        maxLength="40"
                        onChange={handleChange}
                    />
                    <span className="register__error">{errors.registerMail}</span>
                    <label className="register__label" htmlFor="registerPass-input">Пароль</label>
                    <input
                        id="registerPass-input"
                        name="registerPass"
                        type="password"
                        placeholder="Пароль"
                        className={errors.registerPass ? "register__input-text register__input-text_type_pass register__input-text_error": "register__input-text register__input-text_type_pass"}
                        required
                        minLength="8"
                        maxLength="40"
                        onChange={handleChange}
                    />
                    <span className="register__error">{errors.registerPass}</span>

                    <div className="register__submit-container">
                        <span className={props.isRegisterValueNotification.state === 'Успешно' ? "register__submit-error register__submit-error_successfull" : "register__submit-error"}>{props.isRegisterValueNotification.title}</span>
                        <button
                            type="submit"
                            className={isValid ? "register__submit-btn" : "register__submit-btn register__submit-btn_disabled"}
                            disabled={!isValid}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
                <p className="register__text">Уже зарегистрированы? <Link to="/signin" className="register__entry">Войти</Link></p>
            </div>
        </main>
    )
}