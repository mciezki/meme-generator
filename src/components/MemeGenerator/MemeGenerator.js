import React, { useState, useEffect } from 'react';

import Meme from './subcomponents/Meme';
import Images from './subcomponents/Images';

const MemeGenerator = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [allMemeImg, setAllMemeImg] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                setAllMemeImg(memes)
            })
    }, [])


    const handleClick = (e) => {
        const { url } = e.target.dataset;
        const base64img = document.createElement("canvas");
        const baseImage = new Image();
        baseImage.src = url;
        baseImage.crossOrigin = "anonymous";
        base64img.width = 450;
        base64img.height = 450;
        baseImage.onload = function () {
            const ctx = base64img.getContext("2d");
            ctx.drawImage(baseImage, 0, 0, 450, 450);
            const dataURL = base64img.toDataURL("image/png");
            setSelectedImage(dataURL);
        }
    }


    return (
        <>
            {selectedImage ? <Meme selectedImage={selectedImage} /> : null}
            <Images allMemeImg={allMemeImg} selectImg={handleClick} />
        </>
    )
}

export default MemeGenerator;