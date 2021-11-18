import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';
const Dashboard = () => {
    const { AllContexts} = useAuth();
    const { user, handleLogout } = AllContexts;
    return (
        <div>

              <Container>
              <div className="dashboard">
                    <Row>
                       
                       <Col>
                            
                            {user?.email!=='admin@admin.com' && <NavLink activeClassName="active" to="/myorders">My Orders</NavLink>}
                            
                       </Col>
                       <Col>
                            
                            {user?.email!=='admin@admin.com' && <NavLink activeClassName="active" to="/paynow">Pay Now</NavLink>}
                            
                       </Col>
                       <Col>
                            
                            {user?.email!=='admin@admin.com' && <NavLink activeClassName="active" to="/reviews">Reviews</NavLink>}
                            
                       </Col>
                       <Col>
                            
                            {user?.email!=='admin@admin.com' && <NavLink onClick={handleLogout} activeClassName="active" to="/myorders">Log Out</NavLink>}
                           
                       </Col>
                       
                    </Row>   
                    </div>   
            </Container>                     
                                   
        </div>
    );
};

export default Dashboard;