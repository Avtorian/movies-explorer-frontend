export default class MoviesApi {
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

    getMovies() {
        return fetch(`${this._Url}/beatfilm-movies`, {
            headers: this._headers
        })
            .then(this._checkRes)
    }

}