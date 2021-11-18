import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    return (
        <Container>
        <Row>
            <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0', margin:'20px 0' }}>Our Client's Reviews</h1>
        </Row>
        <Row>
        {reviews?.map((review) => (
            <Review review={review} key={review._id}></Review>
        ))}
        </Row>
    </Container>
    );
};

export default Reviews;