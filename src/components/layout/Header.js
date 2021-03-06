import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Possibly Provocative Alcohol</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link to="/" as={Link}>Home</Nav.Link>

                    <Nav.Link to="/favourites" as={Link}>Favourites</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            // <div style={styles.container}>
            //     <h1>Possibly Provocative Beers.</h1>
            // </div>
        )
    }
}

// const styles = {
//     container : {
//         padding: '16px'
//     }
// }

export default Header;
