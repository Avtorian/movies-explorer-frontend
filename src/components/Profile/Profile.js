import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
export default function Profile(props) {

    return (
        <>
            <div className="profile">
                <form name="profile" className="profile__form" noValidate="">
                    <h1 className="profile__title">Привет, Виталий!</h1>
                    <div className="profile__container">
                        <label className="profile__label" htmlFor="profileName-input">Имя</label>
                        <input
                            id="profileName-input"
                            name="profileName"
                            type="text"
                            placeholder="Имя"
                            className="profile__input-text profile__input-text_type_name"
                            required
                            minLength="2"
                            maxLength="40"
                            defaultValue="Виталий"
                        />
                    </div>
                    <span className="profile__error"></span>
                    <div className="profile__container">
                        <label className="profile__label" htmlFor="profileMail-input">E-mail</label>
                        <input
                            id="profileMail-input"
                            name="profileMail"
                            type="email"
                            placeholder="E-mail"
                            className="profile__input-text profile__input-text_type_email"
                            required
                            minLength="5"
                            maxLength="40"
                            defaultValue="pochta@yandex.ru"
                        />
                    </div>
                    <span className="profile__error"></span>
                    <button
                        type="submit"
                        className="profile__submit-btn"
                    >
                        Редактировать
                    </button>
                    <Link className="profile__logout" to="/" onClick={props.onSignOut}>Выйти из аккаунта</Link>
                </form>
            </div>
        </>
    )
}