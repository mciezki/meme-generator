import React from 'react';

const Images = ({ allMemeImg, selectImg }) => {
    const allImages = allMemeImg.map(img => <p key={img.id} onClick={selectImg} data-url={img.url}>{img.name}</p>)

    return (
        <>
            { allImages}
        </>
    )
}

export default Images;