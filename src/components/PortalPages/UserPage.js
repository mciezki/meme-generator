import React, { useState, useEffect } from 'react';
import './HomePage.css'

import { auth, firestore } from "../../firebase";


const UserPage = () => {
    const [userMemes, setUserMemes] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        (async () => {
            const snapshot = await firestore.collection('memes').get()
            setUserMemes(snapshot.docs.map(doc => doc.data()))
        })()
    }, [])

    if (userMemes.length >= 2) {
        userMemes.sort((e1, e2) => {
            if (e1.date < e2.date) return 1
            if (e1.date > e2.date) return -1
            return 0
        })
    }

    const deleteMeme = (e) => {
        const memeIndex = e.target.id;
        let youSure = window.confirm("Are you sure?")
        if (youSure === true) {
            firestore.collection("memes").doc(`${memeIndex}`).delete()
                .then(async () => {
                    const snapshot = await firestore.collection('memes').get()
                    setUserMemes(snapshot.docs.map(doc => doc.data()))
                })
        } else return;

    }

    let memes = userMemes.filter(meme => meme.creator === user.uid ? meme : null).map(meme => (
        <div className="memeContainer" key={meme.index} id={meme.index}>
            <p className="title">{meme.title}</p>
            <div className="likes">
                <span className="like-num">Likes: {meme.likes.length}</span>
            </div>
            <img src={meme.url} alt="meme" />
            <p className="creator">Posted by: <span>{meme.creator}</span></p>
            <button id={meme.index} onClick={deleteMeme}>Delete</button>
        </div>))


    return (
        <div className="HomePage">
            <h4>Your created memes:</h4>
            {userMemes.length > 0 ? memes : <p>You have no memes...</p>}
        </div>
    )
}

export default UserPage;