import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BeerCard from './BeerCard';


class Beers extends React.Component {

    buildCard(beer) {
        return (<Col key={beer.id} sm={4}>
            <BeerCard addBeerToFav={this.props.addBeerToFav} beer={beer} />
        </Col>);
    }

    renderLogic() {
        if (!this.props.favBeers) {
            return this.props.beers.map((beer) => this.buildCard(beer))
        } else {
            return this.props.favBeers.map((beerId) => this.buildCard(this.props.beers.find((element) => element.id === beerId)))
        }
    }

    render() {
        return (<Container >
            <Row> 
            {
                this.renderLogic()
            }
            </Row>
        </Container>
        );
    }
}


export default Beers;
