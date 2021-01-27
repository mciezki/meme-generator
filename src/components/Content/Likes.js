import React, { useContext, useState } from 'react';

import { UserContext } from '../../store/UserProvider';
import { firestore } from "../../firebase";


const Likes = ({ meme }) => {
    const { user } = useContext(UserContext);

    const [likesUsers, setLikesUsers] = useState(meme.likes)


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
            <span className="plus" id={meme.index} onClick={like}>+</span>
        </div>
    )
}

export default Likes;
