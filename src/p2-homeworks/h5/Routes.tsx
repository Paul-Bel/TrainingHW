import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import { Switch } from 'react-router-dom';
import {Junior} from "./pages/Junior";
import {JuniorPL} from "./pages/JuniorPL";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPL: '/junior+',

}

function Routes() {
    return (
        <div>

            <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>} />
            <Route path={PATH.JUNIOR} render={() => <Junior/>} />
            <Route path={PATH.JUNIORPL} render={() => <JuniorPL/>} />



            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
