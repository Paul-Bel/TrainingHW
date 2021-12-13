import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <div>
                <button><NavLink to={PATH.PRE_JUNIOR} className={''}> PRE_JUNIOR </NavLink></button>
                <button><NavLink to={PATH.JUNIOR} className={''}> JUNIOR </NavLink></button>
                <button><NavLink to={PATH.JUNIORPL} className={''}> JUNIOR+ </NavLink></button>
            </div>

        </div>
    )
}

export default Header
