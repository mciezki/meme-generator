import React, { useState, useEffect } from 'react';

import Meme from './subcomponents/Meme';
import Images from './subcomponents/Images';

import { useWindowWidthAndHeight } from "../../CustomHooks"
import { analytics } from '../../firebase';

const MemeGenerator = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const [allMemeImg, setAllMemeImg] = useState([]);

    const [modalOpen, setModalOpen] = useState('')

    const [selectedImageWidth, setSelectedImageWidth] = useState('')
    const [selectedImageHeight, setSelectedImageHeight] = useState('')

    // eslint-disable-next-line
    const [width, height] = useWindowWidthAndHeight();

    useEffect(() => {
        analytics.logEvent("generator_visited")

        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                setAllMemeImg(memes)
            })
    }, [])

    const checkMobile = () => {
        if (width < 1025 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if (document.documentElement.requestFullscreen) document.querySelector(".App").requestFullscreen();
            else if (document.documentElement.webkitRequestFullScreen) document.querySelector(".App").webkitRequestFullScreen();
            window.screen.orientation.lock("landscape-primary")
        }
    }


    const handleClick = (e) => {
        checkMobile();
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
            setModalOpen(true);
            document.querySelector('header').classList.add('blured');
            document.querySelector('.gallery-container').classList.add('blured');
        }
    }

    const exitGen = () => {
        setModalOpen(false);
        document.querySelector('header').classList.remove('blured');
        document.querySelector('.gallery-container').classList.remove('blured');
        if (width < 1025 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.screen.orientation.unlock();
        }
    }


    return (
        <div className='maingen'>
            <Images allMemeImg={allMemeImg} selectImg={handleClick} />
            {modalOpen ? selectedImage && selectedImageHeight ? <Meme selectedImage={selectedImage} width={selectedImageWidth} height={selectedImageHeight} exitGen={exitGen} /> : null : null}
        </div>
    )
}

export default MemeGenerator;