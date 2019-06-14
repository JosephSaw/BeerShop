import React from 'react';

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        return (<Container >
            <Row> {this.state.beers.map((beer) => {
                return (

                    <Col key={beer.id} sm={4}>
                        <BeerCard beer={beer} />
                    </Col>

                )

            })}
            </Row>
        </Container>
        );
    }
}

export default Beers;
