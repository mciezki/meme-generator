import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './Header/Header';
import MemeGenerator from './MemeGenerator/MemeGenerator';
import HomePage from './PortalPages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/topmemes' render={() => (
            <h2>Top memy - wyświetlamy memy posortowane po ilościu lajków</h2>
          )} />
          <Route path='/generator' component={MemeGenerator} />
          <Route render={() => (
            <h2>Strona nie istnieje...</h2>
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
