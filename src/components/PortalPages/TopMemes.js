import React, { useState, useEffect } from 'react';
import Likes from '../Content/Likes';
import './HomePage.css'

import { analytics, firestore } from "../../firebase";


const TopMemes = () => {
    const [topMemes, setTopMemes] = useState([])

    useEffect(() => {
        analytics.logEvent("toppage_visited")

            (async () => {
                const snapshot = await firestore.collection('memes').get()
                setTopMemes(snapshot.docs.map(doc => doc.data()))
            })()
    }, [])

    // sort by likes
    if (topMemes.length >= 2) {
        topMemes.sort((e1, e2) => {
            if (e1.likes.length < e2.likes.length) return 1
            if (e1.likes.length > e2.likes.length) return -1
            return 0
        })
    }

    const memes = topMemes.slice(0, 5).map(meme => (
        <div className="memeContainer" key={meme.index} id={meme.index}>
            <p className="title">{meme.title}</p>
            <Likes meme={meme} />
            <img className="memeimg" src={meme.url} alt="meme" />
            <p className="creator">Posted by: <span>{meme.creator}</span></p>
        </div>
    ))

    return (
        <>
            <div className="HomePage">{topMemes.length > 0 ? memes : <p>Loading...</p>}</div>
        </>
    )
}

export default TopMemes;