import React from "react";
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
export default function PageNotFound() {
    const navigate = useNavigate();

    function back() {
        navigate(-1);
    }
    return (
        <main>
            <div className="page-not-found">
                <h1 className="page-not-found__title">404</h1>
                <p className="page-not-found__subtitle">Страница не найдена</p>
                <button className="page-not-found__exit-btn" onClick={back}>Назад</button>
            </div>
        </main>
    )
}