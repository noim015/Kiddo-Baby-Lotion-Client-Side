import React, { useEffect, useState } from 'react';
import { Card, Col, Button, Container, Row } from 'react-bootstrap';

const ManageProducts = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                
            });
    }, []);



    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
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
        <Container>
            <h1>Manage Products</h1>
            <Row>
            {orders.map(order => 
                        <Col md={4} key={order._id} className="my-3">
                            
                            <Card className="text-center" ><Card.Img variant="top" src={order.img} />
                                <Card.Header><span><b>Product: </b>{order.title} </span></Card.Header>
                                <Card.Body>
                                    
                                    <Card.Text>
                                            <span><b>Description:</b> {order.desc}</span>
                                    </Card.Text>
                                    <Card.Text>
                                            <span><b>Price:</b> {order.price} $ </span>
                                            <span><b>Age: </b> {order.age}</span>
                                    </Card.Text>
                                    
                                    
                                </Card.Body>
                                <Card.Footer className="text-muted"> 
                                     <Card.Link className="btn btn-danger" onClick={() => handleDeleteUser(order._id)}  href="#">Delete</Card.Link>
                                    <Card.Link className="btn btn-success" href="#">Update</Card.Link>
                                </Card.Footer>
                            </Card>
                         </Col>
                    )}
            </Row>
        </Container>
    );
};

export default ManageProducts;