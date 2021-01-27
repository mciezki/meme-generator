import React, { useContext, useState } from 'react';

import { UserContext } from '../../store/UserProvider';
import { firestore } from "../../firebase";


const Likes = ({ meme }) => {
    const { user } = useContext(UserContext);
    const [likesNumber, setLikesNumber] = useState(meme.likes.length)

    const like = (e) => {
        const memeId = e.target.id;
        console.log(memeId)
        const docRef = firestore.doc(`memes/${memeId}`);
    }

    return (
        <div className="likes">
            <span className="like-num">{likesNumber}</span>
            <span className="plus" id={meme.index} onClick={like}>+</span>
        </div>
    )
}

export default Likes;
