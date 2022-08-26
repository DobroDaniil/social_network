import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavData = () => {
    return (
        select => select.isActive ? s.active : s.item
    );
}

const Navbar = () => {
    return <nav className={s.nav}>
        <div>
            <NavLink to="/profile" className={NavData()}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className={NavData()}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" className={NavData()}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={NavData()}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={NavData()}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={NavData()}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;