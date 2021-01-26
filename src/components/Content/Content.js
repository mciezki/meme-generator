import React, { useContext } from 'react'

import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../../store/UserProvider';

import MemeGenerator from '../MemeGenerator/MemeGenerator';
import HomePage from '../PortalPages/HomePage';
import UserPage from '../PortalPages/UserPage';
import TopMemes from '../PortalPages/TopMemes';


const Content = () => {
    const { user } = useContext(UserContext);

    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/topmemes' component={TopMemes} />
            <Route path='/generator' component={MemeGenerator} />
            {user ? <Route path='/profile' component={UserPage} /> : null}
            <Route render={() => (
                <h2>Strona nie istnieje...</h2>
            )} />
        </Switch>
    )
}

export default Content;