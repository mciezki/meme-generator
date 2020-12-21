import React from 'react';
import loading from '../../img/Splash/loading.gif'


const SplashScreen = () => {

    const divStyle = {
        backgroundColor: '#0099AA',
        width: '100%',
        height: '100vh'
    }

    const imgStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    return (
        <div style={divStyle}>
            <img src={loading} alt='splash-screen' style={imgStyle} />
        </div>
    )

}

export default SplashScreen;