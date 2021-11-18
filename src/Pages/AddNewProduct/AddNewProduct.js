import React from 'react';
import { useRef } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';



const AddNewProduct = () => {
   
    const titleRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const ageRef = useRef();
    

    const handleAddProduct = e => {
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const age = ageRef.current.value;
       

        const newUser = { title, desc, price, img, age };

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added a new product.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="container my-5 pb-5">
        <Row className="text-center py-5">
            <h2>Add New Product</h2>
        </Row>
        <Form onSubmit={handleAddProduct}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" ref={titleRef} placeholder="Enter Product title" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" ref={priceRef} placeholder="Product Price" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Desc</Form.Label>
                    <Form.Control type="text" ref={descRef} placeholder="Enter Product description" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" ref={ageRef} placeholder="Enter Product price" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Img</Form.Label>
                    <Form.Control type="text" ref={imgRef} placeholder="Enter Product image url" />
                  </Form.Group>
                </Row>
                <Button variant="danger" type="submit">
                  Add Now
                </Button>
              </Form>





        </div>

            















    );
};

export default AddNewProduct;