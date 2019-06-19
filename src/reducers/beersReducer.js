import { FETCH_BEERS } from '../actions/types';

const initialState = [];

function beersReducer(state = initialState, action) {
    
    switch (action.type) {
        case FETCH_BEERS:
            return [...state, ...action.payload.beers];
            
        default:
            return state;
    }
}

export default beersReducer;