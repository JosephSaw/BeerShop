import React from 'react';

import axios from 'axios';
import { async } from 'q';

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

            this.setState({ beers: response.data.map((beer) => (<li key={beer.id}>{beer.name}</li>)) })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (<div>{this.state.beers}</div>);
    }
}

// async function getBeers() {


//     return <p>Hello world</p>
// }

// function App() {



//     return (<div>
//         ${getBeers()}
//     </div>)
// }

export default Beers;
