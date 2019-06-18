import { FETCH_BEERS, ADD_FAV } from './types';
import axios from 'axios';

export const addToFav = (beerId) => ({type: ADD_FAV, payload: beerId})

export const fetchBeers = () => dispatch => {
    try {
        axios.get('https://api.punkapi.com/v2/beers').then((data) => {
            dispatch({ type: FETCH_BEERS, payload: { beers: data.data } });
        })
    } catch (err) {
        console.log(err);
    }

}