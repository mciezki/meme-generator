import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './Header/Header';
import MemeGenerator from './MemeGenerator/MemeGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact render={() => (
            <h2>Strona główna - wyświetlamy wszystkie nowe dodane memy</h2>
          )} />
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
