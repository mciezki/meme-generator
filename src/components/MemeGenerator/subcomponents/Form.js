import React from 'react'


const Form = ({ title, upperValue, bottomValue, textSize, handleChange }) => {
    return (
        <form>
            <label>Name your meme:</label>
            <input type="text"
                className="input-title"
                name="title"
                placeholder="Title..."
                value={title}
                onChange={handleChange}
            />
            <label className="text-label">Add text: </label>
            <input
                className="text-input"
                type="text"
                name="upperText"
                placeholder="Upper Text"
                value={upperValue}
                onChange={handleChange}
            />
            <input
                className="text-input"
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={bottomValue}
                onChange={handleChange}
            />
            <label className="text-label">Font Size: </label>
            <input
                className="input-fz"
                type="number"
                name="textSize"
                placeholder="Select font size"
                value={textSize}
                onChange={handleChange} />
        </form>
    )
}

export default Form;