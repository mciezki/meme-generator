import React from 'react';
import { useWindowWidthAndHeight } from "../../../CustomHooks";

const Images = ({ allMemeImg, selectImg }) => {
    // eslint-disable-next-line
    const [width, height] = useWindowWidthAndHeight();

    const elementStyle = (src) => {
        if (width > 600) {
            return {
                width: "20vw",
                height: "15vw",
                margin: "0 auto",
                backgroundImage: `url(${src.url})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundClip: "content-box",
                backgroundSize: "cover",
                border: "1px solid #ddd",
                borderRadius: "2%"
            }
        } else if (width < 600 && width > 380) {
            return {
                width: "40vw",
                height: "19vw",
                margin: "0 auto",
                backgroundImage: `url(${src.url})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundClip: "content-box",
                backgroundSize: "cover",
                border: "1px solid #ddd",
                borderRadius: "2%"
            }
        } else {
            return {
                width: "85vw",
                height: "30vw",
                margin: "0 auto",
                backgroundImage: `url(${src.url})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundClip: "content-box",
                backgroundSize: "cover",
                border: "1px solid #ddd",
                borderRadius: "2%"
            }
        }
    }

    const allImages = allMemeImg.map(img =>
        <div className="gallery-element" key={img.id} onClick={selectImg} data-url={img.url} >
            <div className="element-image" style={elementStyle(img)} data-url={img.url}></div>
            <p className="element-title" data-url={img.url}>{img.name}</p>
        </div>
    )

    return (
        <div className="gallery-container">
            <p className="gen-info">Select image to create meme:</p>
            <div className="gallery">
                {allMemeImg.length > 0 ? allImages : <span>Something is wrong...</span>}
            </div>
        </div>
    )
}


export default Images;