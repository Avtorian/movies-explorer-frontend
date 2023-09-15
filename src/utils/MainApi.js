export default class MainApi {
  constructor({ baseUrl, headers }) {
    // тело конструктора
    this._Url = baseUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getProfileInfo() {
    return fetch(`${this._Url}/users/me`, {
      headers: this._headers
    })
      .then(this._checkRes)
  }

  editProfile({ name, email }) {
    return fetch(`${this._Url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email

      })
    })
      .then(this._checkRes)
  }
  getSavedMovies() {
    return fetch(`${this._Url}/movies`, {
      headers: this._headers
    })
      .then(this._checkRes)
  }

  saveMovieCard({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id }) {
    return fetch(`${this._Url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: image.url,
        trailerLink,
        thumbnail: image.formats.thumbnail.url,
        movieId: id,
        nameRU,
        nameEN,
      })
    })
      .then(this._checkRes);
  }
  removeMovieCard(cardId) {
    return fetch(`${this._Url}/movies/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._checkRes);
  }
}