import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Review = ({ review }) => {

    const {title, description, rating} = review;
    return (
       
     
        <Col md={4} className="my-3">
            
            <Card className="text-center">
                <Card.Header>Feedback</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                            {description}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-muted">{rating}</Card.Footer>
            </Card>
        </Col>

 
    );
};

export default Review;