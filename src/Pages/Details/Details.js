import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';


const Details = () => {
    const { key } = useParams();
    
    const { displayProducts } = useProducts();
    const matchingCourse = displayProducts.find((course) => course.key === Number(key));
    console.log(matchingCourse);
    return (
        <div className="container">
          <Row>
             <h1>Place Order</h1>
          </Row>
            <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Mobile" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="danger" type="submit">
                  Place Order
                </Button>
              </Form>
        </div>
    );
};

export default Details;