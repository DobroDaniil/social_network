import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://img.icons8.com/doodle/344/puzzle--v1.png"/>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to="/login/*">Login</NavLink> }
        </div>
    </header>
}

export default Header;