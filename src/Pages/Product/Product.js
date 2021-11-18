import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({ course }) => {
   const {_id , title, price, desc, img } = course;
   
    return (
        <Col sm={12} md={6} lg={4}>
     
        <div className="m-2">
          <Card className="mx-auto" style={{ width: "21rem" }}>
            <Card.Img variant="top" style={{maxHeight:'150px'}} className="img-fluid" src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <h4>Price: {price}$</h4>
            </Card.Body>
            <Card.Body className="d-flex">
            <NavLink
                to={`/Products/${_id}`}
                className="btn btn-danger w-100 me-1"
              >
                Order Now
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      
    </Col>
    );
};

export default Product;