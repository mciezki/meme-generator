import React, { useCallback, useEffect, useState } from 'react';
import '../meme.css';

import database from '../../../testDB';

import Form from './Form';

const Meme = ({ selectedImage }) => {

    //STATES:

    const [bottomText, setBottomText] = useState('');
    const [upperText, setUpperText] = useState('');
    const [textSize, setTextSize] = useState(50)

    const [upperX, setUpperX] = useState("50%");
    const [upperY, setUpperY] = useState("10%");
    const [bottomX, setBottomX] = useState("50%");
    const [bottomY, setBottomY] = useState("90%");

    const [isGrabbed, setIsGrabbed] = useState(false);


    //FORM EDIT:

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'upperText':
                setUpperText(value);
                break;
            case 'bottomText':
                setBottomText(value);
                break;
            case 'textSize':
                setTextSize(value);
                break;
            default:
                alert(`Sorry, ${name} does not exist. Report this to us and we will check what happened.`);
        }
    }

    //GRAB AND DROP FUNCTIONS:

    //1. Movement of the text:
    const handleMouseMove = useCallback((e) => {
        if (isGrabbed) {
            let rect = document.getElementById('svgImage').getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;
            if (e.target.id === "uppertxt") {
                setUpperX(`${offsetX}px`);
                setUpperY(`${offsetY}px`);
            } else if (e.target.id === "bottomtxt") {
                setBottomX(`${offsetX}px`);
                setBottomY(`${offsetY}px`);
            }
        }
    }, [isGrabbed]);

    //2. Movement start:
    const handleMouseDown = useCallback(() => {
        setIsGrabbed(true)
    }, [])

    //3. Movement end:
    const handleMouseUp = useCallback(() => {
        setIsGrabbed(false)
    }, [])


    //4. useEffect hook - update of changing state:
    useEffect(() => {
        if (isGrabbed) document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, [handleMouseMove, handleMouseUp, isGrabbed])


    //Download and post meme function:
    const manageMeme = (e) => {
        const { id } = e.target;
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
            if (id === 'download') {
                const a = document.createElement("a");
                a.download = "meme.png";
                a.href = canvasdata;
                document.body.appendChild(a);
                a.click();
            } else if (id === 'post') {
                //do zmiany z API - fetch
                const newMeme = {
                    id: database.length,
                    url: canvasdata,
                    likes: 0
                };
                database.push(newMeme);
                console.log(database)
            }
        };
    }

    const textStyle = {
        fontFamily: "Impact",
        textTransform: "uppercase",
        fill: "#FFF",
        stroke: "#000",
        userSelect: "none"
    }

    return (
        <div className="memegen">
            <Form upperValue={upperText} bottomValue={bottomText} textSize={textSize} handleChange={handleChange} />
            <svg
                id="createdMeme"
                width="600px"
                height="600px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <image
                    id="svgImage"
                    xlinkHref={selectedImage}
                    height="600px"
                    width="600px"
                />
                <text
                    id="uppertxt"
                    style={{ ...textStyle, fontSize: `${textSize}px` }}
                    x={upperX}
                    y={upperY}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    {upperText}
                </text>
                <text
                    id="bottomtxt"
                    style={{ ...textStyle, fontSize: `${textSize}px` }}
                    x={bottomX}
                    y={bottomY}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    {bottomText}
                </text>
            </svg>
            <br />
            <button id='download' onClick={manageMeme}>Download Meme</button>
            <br />
            <button id='post' onClick={manageMeme}>Post Meme</button>
        </ div>
    )
}

export default Meme;