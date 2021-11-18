import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';



const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            });
    }, []);
    return (
        <div className="container">
            <h1>Manage All Orders</h1>
                    {orders.map(order => 
                        <Col md={4} key={order._id}>
                            
                            <Card className="text-center" ><Card.Img variant="top" src={order.productImg} />
                                <Card.Header><span><b>Product: </b>{order.productTitle} </span></Card.Header>
                                <Card.Body>
                                    <Card.Title><span><b>Customer Name: </b>{order.name}</span></Card.Title>
                                    <Card.Text>
                                            <span><b>Address:</b> {order.address}</span>
                                    </Card.Text>
                                    <Card.Text>
                                            <span><b>Price:</b> {order.productPrice} $</span>
                                    </Card.Text>
                                    <Button variant="success">Confirm</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted"> <span><b>Mobile: </b>{order.mobile} </span></Card.Footer>
                            </Card>
                         </Col>
                    )}


        </div>
    );
};

export default ManageAllOrders;