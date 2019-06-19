import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Beers from './components/Beers';
import Favourites from './components/Favourites';

import store from './store';


function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Beers} />
            <Route path="/favourites"component={Favourites} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
