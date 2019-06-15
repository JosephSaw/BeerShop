import React from 'react'

import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heart = ({ filled, onClick }) => {

    return (
        <div onClick={onClick} >
            <FontAwesomeIcon icon={filled ? farHeart : fasHeart} />
        </div>
    );
};

class BeerCard extends React.Component {

    render() {
        return (
            <div style={styles.card}>
                <div style={styles.imgHolder}>
                    <img alt={this.props.beer.name} src={this.props.beer.image_url} />
                </div>
                <div style={styles.contentHolder}>
                    <div style={styles.contentHeader}>
                        <p style={{ fontWeight: '600' }}> {this.props.beer.name} </p>
                        <Heart />
                    </div>

                    <div style={styles.contentDesc}>
                        <p>{this.props.beer.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    card: {
        display: 'flex',
        borderRadius: '5px',
        border: '1px solid #aaa',
        maxHeight: '200px',
        minHeight: '200px',
        marginTop: '18px'
    },
    imgHolder: {
        flexBasis: '35%',
        padding: '1em',
    },
    contentHolder: {
        flexBasis: '65%',
        margin: '1em',
        overflow: 'hidden',
    },
    contentHeader: {
        display: 'flex',
        justifyContent: 'spaceBetween'
    },
    contentDesc: {
        marginTop: '18px',
        fontSize: '0.8em',
        textOverflow: 'ellipsis',
    }
}


export default BeerCard;