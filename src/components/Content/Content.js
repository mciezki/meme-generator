import React, { useContext } from 'react'

import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../../store/UserProvider';

import MemeGenerator from '../MemeGenerator/MemeGenerator';
import HomePage from '../PortalPages/HomePage';


const Content = () => {
    const { user } = useContext(UserContext);

    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/topmemes' render={() => (
                <h2>Top memy - wyświetlamy memy posortowane po ilościu lajków</h2>
            )} />
            <Route path='/generator' component={MemeGenerator} />
            {user ? <Route path='/profile' render={() => (
                <h2>Profil użytkownika</h2>
            )} /> : null}
            <Route render={() => (
                <h2>Strona nie istnieje...</h2>
            )} />
        </Switch>
    )
}

export default Content;