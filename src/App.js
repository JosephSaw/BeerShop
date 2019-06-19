import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Beers from './components/Beers';

import { fetchBeers, addToFav, removeFromFav } from './actions/beersActions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    return (
      
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact render={() => {
                return <Beers beers={this.props.beers} addBeerToFav={this.props.addBeerToFav}/>
              }} />
              <Route path="/favourites" render={() => {
                return <Beers beers={this.props.beers} favBeers={this.props.favBeers} removeBeerFromFav={this.props.removeBeerFromFav} />
              }} />
            </Switch>
          </div>
        </Router>

    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    beers: state.beers,
    favBeers: state.favBeers
  }
}

const mapActionsToProps = {
  fetchBeers,
  addBeerToFav: addToFav,
  removeBeerFromFav: removeFromFav
}


export default connect(mapStateToProps, mapActionsToProps)(App);

