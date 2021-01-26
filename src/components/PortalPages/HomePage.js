import React, {useState, useEffect} from 'react';
import './HomePage.css'

import {firestore} from "../../firebase";


const HomePage = () => {
    const [postedMemes, setPostedMemes] = useState([])

    useEffect(() => {
        (async () => {
            const snapshot = await firestore.collection('memes').get()
            setPostedMemes(snapshot.docs.map(doc => doc.data()))
        })()
    }, [])

    // sort by date
    if (postedMemes.length >= 2) {
        postedMemes.sort((e1, e2) => {
            if (e1.date < e2.date) return 1
            if (e1.date > e2.date) return -1
            return 0
        })
    }

    const memes = postedMemes.map(meme => (
        <div className="memeContainer" key={meme.index} id={meme.index}>
            <div className="likes">
                <span className="minus">-</span>
                <span className="like-num">{meme.likes}</span>
                <span className="plus">+</span>
            </div>
            <p className="title">{meme.title}</p>
            <img src={meme.url} alt="meme"/>
            <p className="creator">Posted by: <span>{meme.creator}</span></p>
        </div>
    ))

    return (
        <div className="HomePage">{postedMemes.length > 0 ? memes : <p>No memes, sorry...</p>}</div>
    )
}

export default HomePage;