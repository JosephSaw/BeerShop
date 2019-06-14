import React from 'react'

function App(props) {

    return (
        <div style={styles.card}>
            <div style={styles.imgHolder}>
                <img src={props.beer.image_url} />
            </div>
            <div style={styles.contentHolder}>
                <p style={{ fontWeight: '600' }}> {props.beer.name} </p>
                <div style={styles.descContainer}>
                    <p> {props.beer.description} </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        display: 'flex',
        borderRadius: '5px',
        border: '1px solid #aaa',
        maxWidth: '350px',
        minWidth: '250px'
    },
    imgHolder: {
        flexBasis: '35%',
        padding: '1em',
    },
    contentHolder: {
        flexBasis: '65%',
        padding: '1em',
    },
    descContainer : {
        marginTop: '18px',
        fontSize: '0.8em'
    }
}


export default App;