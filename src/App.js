import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import UserProvider from './store/UserProvider';

import Header from './components/Header/Header';
import Content from './components/Content/Content';


function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Content />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
