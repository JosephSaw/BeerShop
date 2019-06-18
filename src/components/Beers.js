import React from 'react';

import { connect } from 'react-redux';
import { fetchBeers } from '../actions/beersActions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BeerCard from './BeerCard';


class Beers extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        this.props.fetchBeers();
    }

    render() {
        console.log(this.props)
        this.props.beers.map((beer) => {
            console.log(beer)
        })
        return (<Container >
            <Row> {this.props.beers.map((beer) => {
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

const mapStateToProps = state => {
    console.log(state);
    return {
        beers: state.beers
    }
}

const mapActionsToProps = {
    fetchBeers
}

export default connect(mapStateToProps, mapActionsToProps)(Beers);
