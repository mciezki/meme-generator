import React, { useState, useEffect } from 'react';

import Form from './subcomponents/Form';
import Meme from './subcomponents/Meme';
import Images from './subcomponents/Images';

const MemeGenerator = () => {
    const [bottomText, setBottomText] = useState('');
    const [upperText, setUpperText] = useState('');
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

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'upperText') setUpperText(value);
        else if (name === 'bottomText') setBottomText(value);
    }


    const handleClick = (e) => {
        const { url } = e.target.dataset;
        const baseImage = new Image();
        baseImage.src = url;
        baseImage.crossOrigin = "anonymous";
        const base64img = document.createElement("canvas");
        base64img.width = 450;
        base64img.height = 450;
        const ctx = base64img.getContext("2d");
        ctx.drawImage(baseImage, 0, 0, 450, 450);
        const dataURL = base64img.toDataURL("image/png");
        setSelectedImage(dataURL);
        console.log(dataURL)
        console.log(selectedImage)
    }


    return (
        <>
            {selectedImage ? <Form upperValue={upperText} bottomValue={bottomText} handleChange={handleChange} /> : null}
            {selectedImage ? <Meme upperText={upperText} bottomText={bottomText} selectedImage={selectedImage} /> : null}
            <Images allMemeImg={allMemeImg} selectImg={handleClick} />
        </>
    )
}

export default MemeGenerator;