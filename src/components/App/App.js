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
import './App.css';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(false);
  function onLogin() {
    setLoggedIn(true);
    navigate('/', { replace: true });
  }
  function onRegister() {
    setLoggedIn(true);
    navigate('/signin', { replace: true });
  }
  function onSignOut(){
    setLoggedIn(false);
  }
  return (
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
              <Movies />
              <Footer />
            </>
          }
          />
          <Route path="/saved-movies" element={
            <>
              <Header loggedIn={loggedIn} />
              <SavedMovies />
              <Footer />
            </>
          }
          />
          <Route path="/profile" element={
            <>
              <Header loggedIn={loggedIn} />
              <Profile onSignOut={onSignOut}/>
            </>
          }
          />
          <Route path="/signin" element={
            <>
              <Login onLogin={onLogin} />
            </>
          }
          />
          <Route path="/signup" element={
            <>
              <Register onRegister={onRegister}/>
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
  );
}

export default App;
