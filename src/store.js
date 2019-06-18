import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

import './reducers/beersReducer';

const initialState = {
    beers: [],
}

const allStoreEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
    rootReducer,
    initialState,
    allStoreEnhancers
);


export default store;