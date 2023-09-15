import React from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import FormValidator from "../../utils/FormValidator";
export default function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid } = FormValidator();
    const [isEdit, setisEdit] = React.useState(false);
    const [isReadonly, setIsReadonly] = React.useState(true);
    const [isChange, setIsChange] = React.useState(false);
    function editProfile() {
        setisEdit(true);
        setIsReadonly(false);        
    }

    React.useEffect(()=>{
        if(currentUser.name === values.profileName && currentUser.email === values.profileMail){
            setIsChange(false);
        }
        else{
            setIsChange(true);
        }
    }, [values])

    function handleSubmit(e) {
        e.preventDefault();
        const name = values.profileName;
        const email = values.profileMail;
        props.onEditProfile({name, email});
    }

    React.useEffect(()=>{
        if(props.isProfileValueNotification.state === 'Успешно'){
            setIsReadonly(true);
            setTimeout(() => {
                setisEdit(false);
                props.setIsProfileValueNotification({ state: "", title: "", })
            }, "1000");
        }
    },[props.isProfileValueNotification]);
    
    return (
        <main>
            <div className="profile">
                <form name="profile" className="profile__form" noValidate="" onSubmit={handleSubmit}>
                    <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                    <div className="profile__container">
                        <label className="profile__label" htmlFor="profileName-input">Имя</label>
                        <input
                            id="profileName-input"
                            name="profileName"
                            type="text"
                            placeholder="Имя"
                            className="profile__input-text profile__input-text_type_name"
                            required
                            pattern="^[A-Za-zА-Яа-я\s\-]+$"
                            minLength="2"
                            maxLength="30"
                            defaultValue={currentUser.name}
                            readOnly={isReadonly}
                            onChange={handleChange}
                        />
                    </div>
                    <span className="profile__error">{errors.profileName}</span>
                    <div className="profile__container">
                        <label className="profile__label" htmlFor="profileMail-input">E-mail</label>
                        <input
                            id="profileMail-input"
                            name="profileMail"
                            type="email"
                            placeholder="E-mail"
                            className="profile__input-text profile__input-text_type_email"
                            required
                            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            minLength="5"
                            maxLength="40"
                            defaultValue={currentUser.email}
                            readOnly={isReadonly}
                            onChange={handleChange}
                        />
                    </div>
                    <span className="profile__error">{errors.profileMail}</span>
                    {!isEdit === true ?
                        <div className="profile__edit-container">
                            <button type="button" className="profile__edit-btn" onClick={editProfile}>Редактировать</button>
                            <Link className="profile__logout" to="/" onClick={props.onSignOut}>Выйти из аккаунта</Link>
                        </div>
                        :
                        <div className="profile__submit-container">
                            <span className={props.isProfileValueNotification.state === 'Успешно' ? "profile__submit-error profile__submit-error_successfull" : "profile__submit-error"}>{props.isProfileValueNotification.title}</span>
                            <button
                                disabled={!(isValid && isChange)}
                                type="submit"
                                className={isValid && isChange ? "profile__submit-btn profile__submit-btn_active" : "profile__submit-btn"}
                            >
                                Сохранить
                            </button>
                        </div>
                    }
                </form>
            </div>
        </main>
    )
}