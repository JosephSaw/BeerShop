import { ADD_FAV, REMOVE_FAV } from '../actions/types';

const initialState = [];

function favBeers(state = initialState, action) {
    
    switch (action.type) {

        case ADD_FAV:
            return [...state, action.payload]

        case REMOVE_FAV:
            
            return state.filter( (beerId) => beerId !== action.payload )
            
        default:
            return state;
    }
}

export default favBeers;