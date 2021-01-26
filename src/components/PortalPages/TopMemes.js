import React, {useState, useEffect} from 'react';
import './HomePage.css'

import {firestore} from "../../firebase";


const TopMemes = () => {
    const [topMemes, setTopMemes] = useState([])

    useEffect(() => {
        (async () => {
            const snapshot = await firestore.collection('memes').get()
            setTopMemes(snapshot.docs.map(doc => doc.data()))
        })()
    }, [])

    // sort by likes
    if (topMemes.length >= 2) {
        topMemes.sort((e1, e2) => {
            if (e1.likes < e2.likes) return -1
            if (e1.likes > e2.likes) return 1
            return 0
        })
    }

    const memes = topMemes.slice(0,5).map(meme => (
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
        <>
            <p>Top 5 memów!</p>
            <div className="HomePage">{topMemes.length > 0 ? memes : <p>No memes, sorry...</p>}</div>
        </>
    )
}

export default TopMemes;