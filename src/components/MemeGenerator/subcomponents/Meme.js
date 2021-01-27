import React, { useCallback, useContext, useEffect, useState } from 'react';
import '../meme.css';

import Form from './Form';
import { UserContext } from '../../../store/UserProvider';
import { firestore } from "../../../firebase";

const Meme = ({ selectedImage, width, height }) => {
    //USER AUTHENTICATE:
    const { user } = useContext(UserContext);

    //STATES:

    const [title, setTitle] = useState('');
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
            case 'title':
                setTitle(value);
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


    //5. Meme ID generator
    const idGenerator = () => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    //6. Function which select action on created meme:
    const actionOnMeme = (id, canvasdata) => {
        if (id === 'download') {
            const a = document.createElement("a");
            a.download = "meme.png";
            a.href = canvasdata;
            document.body.appendChild(a);
            a.click();
        } else if (id === 'post') {
            const memeId = idGenerator()
            const newMeme = {
                index: memeId,
                date: new Date(),
                title,
                creator: user.uid,
                url: canvasdata,
                likes: [],
            };
            if (title === '') alert('You should add the title')
            else {
                firestore
                    .collection('memes')
                    .doc(`${memeId}`)
                    .set(newMeme);
                alert('Meme posted :)')
                setTitle('')
                setBottomText('')
                setUpperText('')
            }
        }
    }

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
            actionOnMeme(id, canvasdata);
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
            <Form title={title} upperValue={upperText} bottomValue={bottomText} textSize={textSize}
                handleChange={handleChange} />
            <svg
                id="createdMeme"
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <image
                    id="svgImage"
                    xlinkHref={selectedImage}
                    height={height}
                    width={width}
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
            {user ? <button id='post' onClick={manageMeme}>Post Meme</button> : null}
        </ div>
    )
}

export default Meme;