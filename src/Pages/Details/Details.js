import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';


const Details = () => {
  const { displayProducts } = useProducts();
  const { key } = useParams();
  const { AllContexts} = useAuth();
  const { user } = AllContexts;
  
  const userEmail = user.email;
  
  const matchingProduct = displayProducts.find((product) => product._id === key);
  
    const nameRef = useRef();
    const mobileRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();
    
    

    const handlePlaceOrder = e => {

        const productTitle = matchingProduct?.title;
        const productPrice = matchingProduct?.price;
        const productImg = matchingProduct?.img;
        const name = nameRef.current.value;
        const mobile = mobileRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const state = stateRef.current.value;
        const zip = zipRef.current.value;
       

        const newOrder = { name, mobile, address, city, state, zip, key, userEmail, productTitle, productPrice, productImg };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully placed order.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    
    return (
        <div className="container">
          <Row>
             <h1>Place Order</h1>
          </Row>
            <Form onSubmit={handlePlaceOrder}>
                
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} placeholder="Enter Your Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="mobile" ref={mobileRef} placeholder="Mobile" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" ref={addressRef} />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control ref={cityRef} placeholder="Sydne/Newyork" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control ref={stateRef} placeholder="California/ NSW" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control ref={zipRef} placeholder="2200/1100" />
                  </Form.Group>
                </Row>

                <Button variant="danger" type="submit">
                  Place Order
                </Button>
              </Form>
        </div>
    );
};

export default Details;