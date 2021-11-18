import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Orders = ({ course }) => {
    const {productTitle, productPrice, productImg,_id} = course;
    return (
        
            <Col>
     
     <div className="m-2">
       <Card className="mx-auto" style={{ width: "21rem" }}>
         <Card.Img variant="top" style={{maxHeight:'150px'}} className="img-fluid" src={productImg} />
         <Card.Body className="my-1 py-1">
           <Card.Title>{productTitle}</Card.Title>
           
         </Card.Body>
         <Card.Body className="my-1 py-1">
           <h4>Price: {productPrice}$</h4>
         </Card.Body>
         <Card.Body className="d-flex">
         <NavLink
                to={`/courses/${_id}`}
                className="btn btn-danger w-100 me-1"
              >
                Delete Order
              </NavLink>
         </Card.Body>
       </Card>
     </div>
   
 </Col>
       
    );
};

export default Orders;