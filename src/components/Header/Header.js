import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../store/UserProvider';
import { auth, signInWithGoogle } from "../../firebase";
import { useWindowWidthAndHeight } from "../../CustomHooks"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css';

const list = [
    { icon: "home", name: "Home", path: "/", exact: true },
    { icon: "trophy", name: "Top Memes", path: "/topmemes" },
    { icon: "hammer", name: "Generator", path: "/generator" },
];

const Header = () => {
    const { user } = useContext(UserContext);
    // eslint-disable-next-line
    const [width, height] = useWindowWidthAndHeight();

    const logInOut = () => {
        if (!user) {
            signInWithGoogle()
        } else auth.signOut();
    }

    // eslint-disable-next-line
    const menu = list.map(element => {
        if (width > 1024) {
            return <li className="nav-list" key={element.name}><NavLink to={element.path} exact={element.exact ? element.exact : false}><FontAwesomeIcon icon={element.icon} /> {element.name}</NavLink></li>
        } else if (width <= 1024) {
            return <li className="nav-list" key={element.name}><NavLink to={element.path} exact={element.exact ? element.exact : false}><FontAwesomeIcon icon={element.icon} /></NavLink></li>
        }
    })


    return (
        <header>
            <button className="log" onClick={logInOut}>{user ? <FontAwesomeIcon icon="sign-out-alt" /> : <FontAwesomeIcon icon="sign-in-alt" />}</button>
            <h1 className="logo">MemeGen</h1>
            <nav className="main">
                <ul className="nav-ul">
                    {menu}
                    {user ? width > 1024 ? <li className="nav-list" key='profile'><NavLink to='/profile' exact={false}><FontAwesomeIcon icon="user" /> User Profile</NavLink></li>
                        :
                        <li className="nav-list" key='profile'><NavLink to='/profile' exact={false}><FontAwesomeIcon icon="user" /></NavLink></li>
                        : null}
                </ul>
            </nav>
        </header>
    )
}

export default Header;