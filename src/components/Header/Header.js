import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../store/UserProvider';
import { auth, signInWithGoogle } from "../../firebase";

import './Header.css';

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "Top Memes", path: "/topmemes" },
    { name: "Generator", path: "/generator" },
];

const Header = () => {
    const { user } = useContext(UserContext);

    const logInOut = () => {
        if (!user) {
            signInWithGoogle()
        } else auth.signOut();
    }

    const menu = list.map(element => (
        <li key={element.name}><NavLink to={element.path} exact={element.exact ? element.exact : false}>{element.name}</NavLink></li>
    ))


    return (
        <header>
            <button className="log" onClick={logInOut}>{user ? 'Logout' : 'Sign in with Google'}</button>
            <h1>Meme Generator</h1>
            <nav className="main">
                <ul>
                    {menu}
                    {user ? <li key='profile'><NavLink to='/profile' exact={false}>User Profile</NavLink></li> : null}
                </ul>
            </nav>
        </header>
    )
}

export default Header;