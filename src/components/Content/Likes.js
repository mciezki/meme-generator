import React, { useContext, useState, useEffect } from 'react';

import { UserContext } from '../../store/UserProvider';
import { firestore } from "../../firebase";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Likes = ({ meme }) => {
    const { user } = useContext(UserContext);

    const [likesUsers, setLikesUsers] = useState([])

    useEffect(() => {
        (async () => {
            const likesList = await firestore.collection('memes').doc(`${meme.index}`).get()
            setLikesUsers(likesList.data().likes)
        })()
    })

    const like = (e) => {
        const memeId = e.target.id;
        const memeRef = firestore.collection('memes').doc(`${memeId}`);
        let accountList = [];

        if (user) {
            if (likesUsers.includes(user.uid)) {
                accountList = likesUsers.filter(element => {
                    return element !== user.uid
                })
            } else {
                accountList = [...likesUsers, user.uid];
            };

            (async () => {
                await memeRef.update({
                    likes: accountList
                })
                const likesList = await memeRef.get()
                setLikesUsers(likesList.data().likes)
            })()
        } else {
            return alert('You have to log in!')
        }
    }

    return (
        <div className="likes">
            <span className="like-num">{likesUsers.length}</span>
            <button className="plus" id={meme.index} onClick={like}><FontAwesomeIcon icon="thumbs-up" /></button>
        </div>
    )
}

export default Likes;
