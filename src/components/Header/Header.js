import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "Top Memes", path: "/topmemes" },
    { name: "Generator", path: "/generator" },
];

const Header = () => {

    const menu = list.map(element => (
        <li key={element.name}><NavLink to={element.path} exact={element.exact ? element.exact : false}>{element.name}</NavLink></li>
    ))

    return (
        <header>
            <h1>Meme Generator</h1>
            <nav className="main">
                <ul>
                    {menu}
                </ul>
            </nav>
        </header>
    )
}

export default Header;