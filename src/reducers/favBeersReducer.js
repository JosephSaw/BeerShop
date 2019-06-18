import { ADD_FAV } from '../actions/types';

const initialState = [];

function favBeers(state = initialState, action) {
    
    switch (action.type) {

        case ADD_FAV:
            return [...state, action.payload]
            
        default:
            return state;
    }
}

export default favBeers;