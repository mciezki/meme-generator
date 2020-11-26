import React, { useState } from 'react';
import '../meme.css'

import Form from './Form';

const Meme = ({ selectedImage }) => {
    const [bottomText, setBottomText] = useState('');
    const [upperText, setUpperText] = useState('');

    const [upperX, setUpperX] = useState("50%");
    const [upperY, setUpperY] = useState("10%");
    const [bottomX, setBottomX] = useState("50%");
    const [bottomY, setBottomY] = useState("90%");

    const [upperDrag, setUpperDrag] = useState(false);
    const [bottomDrag, setBottomDrag] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'upperText') setUpperText(value);
        else if (name === 'bottomText') setBottomText(value);
    }

    const getElement = (e) => {
        let rect = document.getElementById('svgImage').getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        let textPosition = {}
        if (e.target.id === "uppertxt") {
            textPosition = {
                upperDrag: true,
                bottomDrag: false,
                upperX: `${offsetX}px`,
                upperY: `${offsetY}px`
            }
        } else if (e.target.id === "bottomtxt") {
            textPosition = {
                upperDrag: false,
                bottomDrag: true,
                bottomX: `${offsetX}px`,
                bottomY: `${offsetY}px`
            }
        }
        return textPosition;
    }

    const handleMouseMove = (e) => {
        if (upperDrag || bottomDrag) {
            let textPosition = {};
            textPosition = getElement(e);
            if (e.target.id === "uppertxt" && upperDrag) {
                setUpperX(textPosition.upperX);
                setUpperY(textPosition.upperY);
            } else if (e.target.id === "bottomtxt" && bottomDrag) {
                setBottomX(textPosition.bottomX);
                setBottomY(textPosition.bottomY);
            }
        }
    };

    const handleMouseDown = (e) => {
        const textPosition = getElement(e);
        document.addEventListener('mousemove', (event) => handleMouseMove(event));
        if (e.target.id === "uppertxt") {
            setUpperDrag(textPosition.upperDrag);
            setUpperX(textPosition.upperX);
            setUpperY(textPosition.upperY);
            console.log(upperDrag)
        } else if (e.target.id === "bottomtxt") {
            setBottomDrag(textPosition.bottomDrag);
            setBottomX(textPosition.bottomX);
            setBottomY(textPosition.bottomY);
            console.log(bottomDrag)
        }
    }

    const handleMouseUp = (e) => {
        document.removeEventListener('mousemove', () => handleMouseMove(e));
        setUpperDrag(false);
        setBottomDrag(false);
    }

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
            <Form upperValue={upperText} bottomValue={bottomText} handleChange={handleChange} />
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
                    id="uppertxt"
                    style={{ ...textStyle, zIndex: 1 }}
                    x={upperX}
                    y={upperY}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    onMouseDown={e => handleMouseDown(e)}
                    onMouseUp={e => handleMouseUp(e)}
                >
                    {upperText}
                </text>
                <text
                    id="bottomtxt"
                    style={textStyle}
                    x={bottomX}
                    y={bottomY}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    onMouseDown={e => handleMouseDown(e)}
                    onMouseUp={e => handleMouseUp(e)}
                >
                    {bottomText}
                </text>
            </svg>
            <button onClick={convertSvgToImage}>Download Meme!</button>
        </>
    )
}

export default Meme;