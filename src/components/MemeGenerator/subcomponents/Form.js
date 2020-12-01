import React from 'react'

//NEED HARD CSS - alpha version

const Form = ({ upperValue, bottomValue, textSize, handleChange }) => {
    return (
        <form>
            <label>Add text: </label>
            <br />
            <input
                type="text"
                name="upperText"
                placeholder="Upper Text"
                value={upperValue}
                onChange={handleChange}
            />
            <input
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={bottomValue}
                onChange={handleChange}
            />
            <br />
            <label>Font Size: </label>
            <input
                type="number"
                name="textSize"
                placeholder="Select font size"
                value={textSize}
                onChange={handleChange} />
        </form>
    )
}

export default Form;