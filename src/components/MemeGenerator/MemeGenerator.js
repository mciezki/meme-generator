import React, { useState, useEffect } from 'react';

import Meme from './subcomponents/Meme';
import Images from './subcomponents/Images';

const MemeGenerator = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [allMemeImg, setAllMemeImg] = useState([]);

    const [selectedImageWidth, setSelectedImageWidth] = useState('')
    const [selectedImageHeight, setSelectedImageHeight] = useState('')

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
        baseImage.onload = function () {
            const wrh = baseImage.width / baseImage.height;
            base64img.width = 700;
            base64img.height = base64img.width / wrh;
            const ctx = base64img.getContext("2d");
            ctx.drawImage(baseImage, 0, 0, base64img.width, base64img.height);
            const dataURL = base64img.toDataURL("image/png");
            setSelectedImage(dataURL);
            setSelectedImageWidth(`${base64img.width}px`);
            setSelectedImageHeight(`${base64img.height}px`);
            const chosen = document.querySelector('.maingen');
            chosen.scrollIntoView({ behavior: "smooth" });
        }
    }


    return (
        <div className='maingen'>
            {selectedImage && selectedImageHeight ? <Meme selectedImage={selectedImage} width={selectedImageWidth} height={selectedImageHeight} /> : null}
            <Images allMemeImg={allMemeImg} selectImg={handleClick} />
        </div>
    )
}

export default MemeGenerator;