import { FETCH_BEERS } from '../actions/types';

const initialState = {
    beers: [],
    test: 'hello'
};

function beersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BEERS:
                        
            return [...state, ...action.payload.beers];
            // { ...state, beers: [...action.payload.beers] }
            // Object.assign({}, state, {beers :[ ...action.payload.beers]})
            
            
        default:
            return state;
    }
}

export default beersReducer;