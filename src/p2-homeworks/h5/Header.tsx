import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./pages/Header.module.css";

function Header() {
    return (
        <div>
            <div className={s.menu}>
                <div className={s.collapse}>
                    <div className={s.menuCollapsed}>Menu  </div>
                <div className={s.buttons}>
                    <NavLink to={PATH.PRE_JUNIOR} className={s.menu}> PRE_JUNIOR </NavLink>
                    <NavLink to={PATH.JUNIOR} className={s.menu}> JUNIOR </NavLink>
                    <NavLink to={PATH.JUNIORPL} className={s.menu}> JUNIOR+ </NavLink>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Header
