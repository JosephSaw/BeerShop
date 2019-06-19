import React from 'react'

import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from 'style-it';

const Cart = ({ filled, onClick }) => {

    return (
        <div onClick={onClick} >
            {

                <FontAwesomeIcon className="heartIcon" icon={filled ? fasHeart : farHeart} />

            }
        </div>
    );
};

class BeerCard extends React.Component {
    state = { fav: false };

    handleClick = () => {
        this.props.addBeerToFav ? this.props.addBeerToFav(this.props.beer.id) : this.props.removeBeerFromFav(this.props.beer.id);
        this.setState({ filled: !this.state.filled });
    }

    render() {
        return (
            <Style>
                {`
                    .heartIcon {
                        color: red;
                    }

                    .heartIcon:hover {
                        -webkit-animation: wobble-hor-bottom 0.8s forwards;
	                    animation: wobble-hor-bottom 0.8s forwards;
                    }

                    @-webkit-keyframes wobble-hor-bottom {
                        0%,
                        100% {
                          -webkit-transform: translateX(0%);
                                  transform: translateX(0%);
                          -webkit-transform-origin: 50% 50%;
                                  transform-origin: 50% 50%;
                        }
                        15% {
                          -webkit-transform: translateX(-10px) rotate(-3deg);
                                  transform: translateX(-10px) rotate(-3deg);
                        }
                        30% {
                          -webkit-transform: translateX(7.5px) rotate(3deg);
                                  transform: translateX(7.5px) rotate(3deg);
                        }
                        45% {
                          -webkit-transform: translateX(-7.5px) rotate(-3deg);
                                  transform: translateX(-7.5px) rotate(-3deg);
                        }
                        60% {
                          -webkit-transform: translateX(4.5px) rotate(1.2deg);
                                  transform: translateX(4.5px) rotate(1.2deg);
                        }
                        75% {
                          -webkit-transform: translateX(-3px) rotate(-0.6deg);
                                  transform: translateX(-3px) rotate(-0.6deg);
                        }
                      }
                      @keyframes wobble-hor-bottom {
                        0%,
                        100% {
                          -webkit-transform: translateX(0%);
                                  transform: translateX(0%);
                          -webkit-transform-origin: 50% 50%;
                                  transform-origin: 50% 50%;
                        }
                        15% {
                            -webkit-transform: translateX(-10px) rotate(-3deg);
                                    transform: translateX(-10px) rotate(-3deg);
                          }
                          30% {
                            -webkit-transform: translateX(7.5px) rotate(3deg);
                                    transform: translateX(7.5px) rotate(3deg);
                          }
                          45% {
                            -webkit-transform: translateX(-7.5px) rotate(-3deg);
                                    transform: translateX(-7.5px) rotate(-3deg);
                          }
                          60% {
                            -webkit-transform: translateX(4.5px) rotate(1.2deg);
                                    transform: translateX(4.5px) rotate(1.2deg);
                          }
                          75% {
                            -webkit-transform: translateX(-3px) rotate(-0.6deg);
                                    transform: translateX(-3px) rotate(-0.6deg);
                          }
                      }
                      
                   
                `}

                <div style={styles.card}>
                    <div style={styles.imgHolder}>
                        <img alt={this.props.beer.name} src={this.props.beer.image_url} />
                    </div>
                    <div style={styles.contentHolder}>
                        <div style={styles.contentHeader}>
                            <p style={{ fontWeight: '600' }}> {this.props.beer.name} </p>
                            <Cart filled={this.state.filled} onClick={this.handleClick} />
                        </div>

                        <div style={styles.contentDesc}>
                            <p>{this.props.beer.description}</p>
                        </div>
                    </div>
                </div>
            </Style>
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
        justifyContent: 'space-between'
    },
    contentDesc: {
        marginTop: '18px',
        fontSize: '0.8em',
        textOverflow: 'ellipsis',
    }
}


export default BeerCard;