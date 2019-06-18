import {combineReducers} from 'redux';
import beersReducer from './beersReducer';
import favBeers from './favBeersReducer';

export default combineReducers({
    beers: beersReducer,
    favBeers: favBeers
})