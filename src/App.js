import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import UserProvider from './store/UserProvider';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SplashScreen from './components/Content/SplashScreen';

import { getToken } from './firebase';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTokenFound, setTokenFound] = useState(false);

  console.log(isTokenFound);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

    getToken(setTokenFound);
  }, [])

  return (
    <>
      {isLoading ? <SplashScreen /> :
        <UserProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
              <Header />
              <Content />
            </div>
          </Router>
        </UserProvider>
      }
    </>);
}

export default App;
