import React, { useRef } from 'react';
import { Col, Form, Row , Button, Container} from 'react-bootstrap';

const Reviews = () => {

    const titleRef = useRef();
    const descRef = useRef();
    const rateRef = useRef();
    const handleReview = e => {

        const title = titleRef.current.value;
        const description = descRef.current.value;
        const rating = rateRef.current.value;
        
       

        const newReview = { title, description, rating };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added a review.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <Container>
            <h1>Add Review</h1>

            <Form onSubmit={handleReview}>
                
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridTitle">
                    <Form.Label>Review Title</Form.Label>
                    <Form.Control type="text" ref={titleRef} placeholder="Enter Review Title" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  
                  <Form.Group as={Col} controlId="formGridDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control ref={descRef} as="textarea" placeholder="Please write something awesome" rows={3} />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridRating">
                  <Form.Label>Rate</Form.Label>
                  <Form.Control placeholder="5*" ref={rateRef} />
                </Form.Group>

                <Button variant="danger" type="submit">
                  Add Review
                </Button>
              </Form>

        </Container>
    );
};

export default Reviews;