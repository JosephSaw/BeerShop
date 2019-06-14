import React from 'react';

import axios from 'axios';

import BeerCard from './BeerCard';

class Beers extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        this.renderBeers();
    }

    renderBeers = async () => {
        try {
            const response = await axios.get('https://api.punkapi.com/v2/beers');

            this.setState({ beers: response.data })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (<div>{this.state.beers.map((beer) => <BeerCard key={beer.id} beer={beer} />)}</div>);
    }
}

export default Beers;
