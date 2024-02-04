import { FC } from "react";
import './_NotFound.scss';
import { NavLink } from "react-router-dom";

const NotFound:FC = () => {
    return (
        <section className="error-page">
            <h1 className="error-page-title">404</h1>
            <h2 className="error-page-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink title='Accueil' end to='/home' className="error-page-link">Retourner sur la page d'accueil</NavLink>
        </section>
    )
};

export default NotFound;