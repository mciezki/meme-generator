import React, { useState, useEffect } from 'react';
import './HomePage.css'

import { analytics, auth, firestore } from "../../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const UserPage = () => {
    const [userMemes, setUserMemes] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        analytics.logEvent("userpage_visited")

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
                <span className="like-num">{meme.likes.length}</span>
            </div>
            <img className="memeimg" src={meme.url} alt="meme" />
            <p className="creator">Posted by: <span>{meme.creator}</span></p>
            <button className="plus" id={meme.index} onClick={deleteMeme}><FontAwesomeIcon className="thumbup" icon="trash-alt" /></button>
        </div>))


    return (
        <div className="HomePage">
            <h4>Your created memes:</h4>
            {userMemes.length > 0 ? memes : <p>You have no memes...</p>}
        </div>
    )
}

export default UserPage;