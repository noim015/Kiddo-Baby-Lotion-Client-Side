import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
   
    const {
        user,
        error,
        setError,
        handleUserRegister,
        setNameOfUser
      } = useFirebase();
      const location = useLocation();
      const history = useHistory();
      const redirect = location.state?.from || "/";
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [name, setName] = useState("");
      
      //Get User Email
      const hanldeEmail = (e) => {
        setEmail(e.target.value);
      };
      //Get User Password
      const hanldePassword = (e) => {
        setPassword(e.target.value);
      };
      //Get User Name
      const handleName = (e) => {
        setName(e.target.value);
      };
    
     
     //Login with Email and Password 
     const handleRegister = () => {
        handleUserRegister(email, password)
        .then(result => {
            setNameOfUser(user, name);
            history.push(redirect);
            window.location.reload();
        })
        .catch((error) => {
            setError(error.message);
          });
      };
       
   
 
    return (
        <div className="signin_form" style={{ padding:'30px 10px'}}>
        <Container>
          <Row>
              <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }}>User Sign Up Form</h1>
          </Row>
          {!user?.email ?
        <Row className="pb-5">
            <Col xs={0} md={3} ></Col>
            <Col xs={12} md={6} className="mb-3 bdr">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Youer Name: </Form.Label>
                    <Form.Control onChange={handleName} type="text" placeholder="Enter your name" required />
              </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={hanldeEmail} type="email" placeholder="Enter email" required/>
                    <Form.Text  className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={hanldePassword} type="password" placeholder="Enter password" required />
              </Form.Group>
              <Button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRegister} variant="danger" >
                  Sign Up
            </Button>
            <br />
            <br />
            <div className="flex items-center justify-between">
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">Already registered??</Link>
          </div>
            </Col>
            <Col xs={0} md={3} ></Col>
        </Row> : <Alert  variant={'danger'}>
                      <h1 className="text-center" >You are signed in</h1>
                </Alert> }
                {error && <Row>
                        <Alert  className="text-center" variant={'danger'}>
                            {error}
                    </Alert>
            </Row> }
      </Container>
      
  </div>
    );
};

export default Register;