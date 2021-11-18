import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({ course }) => {
   const {_id , title, price, desc, img, age } = course;
   
    return (
        <Col sm={12} md={6} lg={4}>
     
        <div className="m-2">
          <Card className="mx-auto" style={{ width: "21rem" }}>
            <Card.Img variant="top" style={{maxHeight:'350px'}} className="img-fluid" src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title>{title}</Card.Title>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <h4>Price: {price}$ <span style={{color:'#dc3545', float:'right',fontSize:'18px'}}> Age: {age} </span> </h4>
            </Card.Body>
            <Card.Body className="d-flex">
            <NavLink
                to={`/Products/${_id}`}
                className="btn btn-primary w-100 me-1"
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