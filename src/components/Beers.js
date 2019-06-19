import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BeerCard from './BeerCard';


class Beers extends React.Component {

    render() {
        return (<Container >
            <Row> {this.props.beers.map((beer) => {
                return (

                    <Col key={beer.id} sm={4}>
                        <BeerCard addBeerToFav={this.props.addBeerToFav} beer={beer} />
                    </Col>

                )

            })}
            </Row>
        </Container>
        );
    }
}


export default Beers;
