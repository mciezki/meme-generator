import React from 'react';

const Images = ({ allMemeImg, selectImg }) => {
    const allImages = allMemeImg.map(img => <p className="gallery-element" key={img.id} onClick={selectImg} data-url={img.url}>{img.name}</p>)

    return (
        <div>
            {allMemeImg.length > 0 ? allImages : <span>Something is wrong...</span>}
        </div>
    )
}

export default Images;