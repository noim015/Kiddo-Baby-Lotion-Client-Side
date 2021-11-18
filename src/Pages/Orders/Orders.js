import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Orders = ({ course }) => {
    const {productTitle, productPrice, productImg,_id} = course;
    const [users, setUsers] = useState([]);
    const location = useLocation();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                        window.location.reload();
                    }
                });
        }
    }

   
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
                      <button onClick={() => handleDeleteUser(_id)}>Delete Order</button>
                      </Card.Body>
                    </Card>
                  </div>
   
            </Col>
       
    );
};

export default Orders;