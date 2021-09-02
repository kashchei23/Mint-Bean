import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cards from '../components/card';
import Landing from '../components/landing/Landing';
import NavBar from '../components/navigation/NavBar';
import './App.scss';
import '../styles/global.scss';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/mint-match-game">
        <Cards />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
