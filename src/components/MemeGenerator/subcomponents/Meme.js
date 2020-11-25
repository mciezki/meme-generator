import React from 'react';
import '../meme.css'

const Meme = ({ upperText, bottomText, selectedImage }) => {

    const convertSvgToImage = () => {
        const svg = document.getElementById("createdMeme");
        let svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "canvas");
        const svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))));
        img.onload = function () {
            canvas.getContext("2d").drawImage(img, 0, 0);
            const canvasdata = canvas.toDataURL("image/png");
            const a = document.createElement("a");
            a.download = "meme.png";
            a.href = canvasdata;
            document.body.appendChild(a);
            a.click();
        };
    }

    const textStyle = {
        fontFamily: "Impact",
        fontSize: "50px",
        textTransform: "uppercase",
        fill: "#FFF",
        stroke: "#000",
        userSelect: "none"
    }

    return (
        <>
            <svg
                id="createdMeme"
                width="450px"
                height="450px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <image
                    id="svgImage"
                    xlinkHref={selectedImage}
                    height="450px"
                    width="450px"
                />
                <text
                    style={{ ...textStyle, zIndex: 1 }}
                    x="50%"
                    y="10%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                >
                    {upperText}
                </text>
                <text
                    style={textStyle}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    x="50%"
                    y="90%"
                >
                    {bottomText}
                </text>
            </svg>
            <button onClick={convertSvgToImage}>Download Meme!</button>
        </>
        // <div className="meme">
        //     <img src={selectedImage} alt='meme' />
        //     <h2 className='top'>{upperText}</h2>
        //     <h2 className='bottom'>{bottomText}</h2>
        // </div>
    )
}

export default Meme;