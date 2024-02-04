import { FC } from "react";
import "./_Header.scss"; 
import { NavLink } from "react-router-dom";
import logo from "../../../styles/img/kasa-logo.png";

const Header:FC = () => {
    return (
        <header className="header">
            <img src={logo} alt="kasa-logo" className="header-logo"/>

            <nav className="header-nav">
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => (
                                isActive ? 'header-nav-link header-nav-link-active' 
                                : 'header-nav-link header-nav-link-inactive'
                            )}
                            title="Accueil"
                            end to="/home"
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (
                                isActive ? 'header-nav-link header-nav-link-active' 
                                : 'header-nav-link header-nav-link-inactive'
                            )}
                            title="À propos"
                            end to="/about"
                        >
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;