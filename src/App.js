import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Header from './components/layout/Header';
import Beers from './components/Beers';

import store from './store';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Beers />

      </div>
    </Provider>

  );
}

export default App;
