import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './App.css';
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import * as auth from '../../utils/auth.js';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movieCards, setMovieCards] = React.useState([]);
  const [savedMovieCards, setSavedMovieCards] = React.useState([]);
  const [isPreloader, setisPreloader] = React.useState(false);
  const [isErrorValue, setIsErrorValue] = React.useState('');
  const [isProfileValueNotification, setIsProfileValueNotification] = React.useState({ state: "", title: "", });
  const [isRegisterValueNotification, setIsRegisterValueNotification] = React.useState({ state: "", title: "", });
  const [isLoginValueNotification, setIsLoginValueNotification] = React.useState({ state: "", title: "", });
  const [savedSearchWord, setSavedSearchWord] = React.useState('');
  const [savedSearchShort, setSavedSearchShort] = React.useState(false);

  const mainApi = new MainApi({
    baseUrl: "https://api.avtorian.nomoreparties.co",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      'Content-Type': 'application/json'
    }
  })

  const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  function getSavedSearch() {
    if (JSON.parse(localStorage.getItem('moviesCards'))) {
      setMovieCards(JSON.parse(localStorage.getItem('moviesCards')));
    }
    if (JSON.parse(localStorage.getItem('savedMovieCards'))) {
      setSavedMovieCards(JSON.parse(localStorage.getItem('savedMovieCards')));
    }
    if (JSON.parse(localStorage.getItem('filterShortMovies'))) {
      setSavedSearchShort(JSON.parse(localStorage.getItem('filterShortMovies')));
    }
    if (JSON.parse(localStorage.getItem('filterTextMovies'))) {
      setSavedSearchWord(JSON.parse(localStorage.getItem('filterTextMovies')));
    }
  }

  function clearSavedSearch() {
    localStorage.removeItem('moviesCards');
    localStorage.removeItem('savedMovieCards');
    localStorage.removeItem('filterTextMovies');
    localStorage.removeItem('filterShortMovies');
    setSavedSearchWord('');
    setSavedSearchShort(false);
    setSavedMovieCards([]);
    setMovieCards([]);
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  function getSavedMovies() {
    if (loggedIn) {
      mainApi.getSavedMovies()
        .then((savedMovies) => {
          setSavedMovieCards(savedMovies)
        })
        .catch((err) => console.log(`Ошибка ${err}`))
    }
  }

  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getProfileInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(`Ошибка ${err}`))
    }
  }, [loggedIn]);

  function handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          getSavedSearch();
          navigate("/movies", { replace: true })
        }
      })
        .catch((err) => {
          console.log(`Ошибка ${err}`)
        });
    };
  }

  function handleSubmitSearch() {
    setisPreloader(true);
    moviesApi.getMovies()
      .then((movies) => {
        setMovieCards(movies);
        setisPreloader(false);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`)
        setIsErrorValue('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      }
      )
  }
  function onSignOut() {
    clearSavedSearch();
    setLoggedIn(false);
    navigate('/');
    localStorage.removeItem('jwt');
  }

  function onRegister({ password, email, name }) {
    auth.register({ password, email, name })
      .then(() => {
        setIsRegisterValueNotification({ state: "", title: "" })
        auth.authorize({ password, email })
          .then((res) => {
            localStorage.setItem("jwt", res.token);
            setLoggedIn(true);
            navigate('/movies', { replace: true });
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        setIsRegisterValueNotification({ state: "Ошибка", title: "Произошла ошибка регистрации" })
        console.log(err)
      })
  }

  function onLogin({ password, email }) {
    auth.authorize({ password, email })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
        setIsLoginValueNotification({ state: "", title: "" })
      })
      .catch((err) => {
        console.log(err);
        setIsLoginValueNotification({ state: "Ошибка", title: "Произошла ошибка авторизации" })
      })
  }
  function onEditProfile({ name, email }) {
    mainApi.editProfile({ name, email })
      .then((newInfo) => {
        setCurrentUser(newInfo);
        setIsProfileValueNotification({ state: "Успешно", title: "Обновление профиля прошло успешно" });
      })
      .catch((err) => {
        setIsProfileValueNotification({ state: "Ошибка", title: "При обновлении профиля произошла ошибка." });
        console.log(`Ошибка ${err}`)
      });
  }
  function onCardDelete(cardID) {
    const deletedCard = savedMovieCards.find((movieCard) => movieCard.movieId === cardID)
    mainApi.removeMovieCard(deletedCard._id).then(() => {
      setSavedMovieCards((state) => state.filter((c) => c._id !== deletedCard._id))
    })
      .catch((err) => console.log(`Ошибка ${err}`));;
  }

  function onCardSave(card) {
    mainApi.saveMovieCard(card)
      .then((newCard) => {
        setSavedMovieCards([newCard, ...savedMovieCards]);
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Routes>
            <Route path="/" element={
              <>
                <Header loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
            />
            <Route path="/movies" element={
              <>
                <Header loggedIn={loggedIn} />
                <ProtectedRouteElement loggedIn={loggedIn} element={Movies} movieCards={movieCards} isPreloader={isPreloader} handleSubmitSearch={handleSubmitSearch} isErrorValue={isErrorValue} setIsErrorValue={setIsErrorValue} savedMovieCards={savedMovieCards} onCardDelete={onCardDelete} onCardSave={onCardSave} savedSearchWord={savedSearchWord} savedSearchShort={savedSearchShort} setSavedSearchShort={setSavedSearchShort} setSavedSearchWord={setSavedSearchWord} />
                <Footer />
              </>
            }
            />
            <Route path="/saved-movies" element={
              <>
                <Header loggedIn={loggedIn} />
                <ProtectedRouteElement loggedIn={loggedIn} element={SavedMovies} savedMovieCards={savedMovieCards} getSavedMovies={getSavedMovies} isErrorValue={isErrorValue} setIsErrorValue={setIsErrorValue} onCardDelete={onCardDelete} />
                <Footer />
              </>
            }
            />
            <Route path="/profile" element={
              <>
                <Header loggedIn={loggedIn} />
                <ProtectedRouteElement loggedIn={loggedIn} element={Profile} onSignOut={onSignOut} onEditProfile={onEditProfile} isProfileValueNotification={isProfileValueNotification} setIsProfileValueNotification={setIsProfileValueNotification} />
              </>
            }
            />
            <Route path="/signin" element={
              <>
                <Login onLogin={onLogin} isLoginValueNotification={isLoginValueNotification} />
              </>
            }
            />
            <Route path="/signup" element={
              <>
                <Register onRegister={onRegister} isRegisterValueNotification={isRegisterValueNotification} />
              </>
            }
            />
            <Route path="*" element={
              <>
                <PageNotFound />
              </>
            }
            />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
