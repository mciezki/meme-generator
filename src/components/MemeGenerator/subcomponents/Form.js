import React from 'react'

const Form = ({ upperValue, bottomValue, handleChange }) => {
    return (
        <form>
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
        </form>
    )
}

export default Form;