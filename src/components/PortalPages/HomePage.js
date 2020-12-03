import React, { useState, useEffect } from 'react';
import './HomePage.css'

import database from '../../testDB';


const HomePage = () => {
    const [postedMemes, setPostedMemes] = useState([])

    useEffect(() => {
        // fetch(database)
        //     .then(response => response.json())
        //     .then(response => {
        //         const data = response.data
        //         setPostedMemes(data)
        //     })
        setPostedMemes(database)
    }, [])


    let memes = postedMemes.slice(0).reverse().map(meme => (
        <div className="memeContainer" key={meme.id} id={meme.id}>
            <div className="likes">
                <span className="minus">-</span>
                <span className="like-num">{meme.likes}</span>
                <span className="plus">+</span>
            </div>
            <img src={meme.url} alt="meme" />
        </div>))


    return (
        <div className="HomePage">{postedMemes.length > 0 ? memes : <p>Brak memów, przepraszamy</p>}</div>
    )
}

export default HomePage;