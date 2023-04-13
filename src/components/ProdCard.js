import React from 'react';
import { Button, Card } from 'react-bootstrap';

function ProdCard(props) {
    return (
        <Card className='text-center'>
            <Card.Img variant="top" src={props.data.image} />
            <Card.Body>
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <a className="btn btn-primary btn-sm">View</a>
                <a className="btn btn-success btn-sm">Add Cart</a>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProdCard;