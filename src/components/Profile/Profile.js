import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
export default function Profile(props) {
    const [isEdit, setisEdit] = React.useState(false);
    const [isReadonly, setIsReadonly] = React.useState(true);    
    const [isButtonActive, setisButtonActive] = React.useState(true);
    function editProfile() {
        setisEdit(true);
        setIsReadonly(false);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setIsReadonly(true);
        setisButtonActive(false);        
    }    
    return (
        <>
            <div className="profile">
                <form name="profile" className="profile__form" noValidate="" onSubmit={handleSubmit}>
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
                            readOnly={isReadonly}
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
                            readOnly={isReadonly}
                        />
                    </div>
                    <span className="profile__error"></span>
                    {!isEdit === true ?
                        <div className="profile__edit-container">
                            <button type="button" className="profile__edit-btn" onClick={editProfile}>Редактировать</button>
                            <Link className="profile__logout" to="/" onClick={props.onSignOut}>Выйти из аккаунта</Link>
                        </div>
                        :
                        <div className="profile__submit-container">
                            <span className="profile__submit-error">{!isButtonActive ? "При обновлении профиля произошла ошибка.": ""}</span>
                            <button
                                disabled={!isButtonActive}
                                type="submit"
                                className={isButtonActive ? "profile__submit-btn profile__submit-btn_active" : "profile__submit-btn"}
                            >
                                Сохранить
                            </button>
                        </div>
                        }
                </form>
            </div>
        </>
    )
}