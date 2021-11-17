import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { AllContexts} = useAuth();
    const { user, handleLogout } = AllContexts;
    return (
        <div> 
           <div className="header_navigration">
                <Navbar expand="lg">
                        <Container>
                                <NavLink style={{textDecoration:'none',color:'#fff',fontSize:'25px'}} to="/">Kiddo Baby Lotion</NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                                    <NavLink activeClassName="active" to="/Products">Our Products</NavLink>
                                    {!user?.email && <NavLink activeClassName="active" to="/register">Register Now</NavLink>}
                                    {!user?.email && <NavLink activeClassName="active" to="/login">Login Now</NavLink>}
                                    {user?.email && <NavLink activeClassName="active" to="/myorders">My Orders</NavLink>}
                                    {user?.email && <NavLink activeClassName="active" to="/manageallorders">Manage All Orders</NavLink>}
                                    {user?.email && <NavLink activeClassName="active" to="/addnewproduct">Add A New Service</NavLink>}
                                </Nav>
                                {user?.email && <Nav className="justify-content-end" >
                                    <span style={{color:'#fff',padding:'10px'}}>{user.displayName}</span>
                                    <button onClick={handleLogout} className="btn btn-danger">LogOut</button>
                                </Nav>}
                            </Navbar.Collapse>
                        </Container>
                </Navbar>
                
           </div>           
        </div>
    );
};

export default Header;