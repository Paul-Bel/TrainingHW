import React from 'react'
import s from './Pages.module.css'

function Error404() {
    return (
        <div className={s.photo}>
            <img className={s.NoPages}
                 src="https://project-seo.net/wp-content/uploads/2019/10/404-not-found.jpg"/>
            <div>
                <div className={s.Pages}>Page not found!</div>
                <div className={s.Pages}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    )
}

export default Error404
