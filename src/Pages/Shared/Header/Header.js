import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="info" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> Meat Shop</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>

                        <Nav.Link as={HashLink} to="/explore#/explore">Explore</Nav.Link>

                        <Nav.Link as={HashLink} to="/contact#contact">Contact Us</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/amenities#aminities">Amenities</Nav.Link> */}
                        {/* <Nav.Link as={HashLink} to="/myOrders#myOrders">My Orders</Nav.Link> */}
                        {/* <Nav.Link as={HashLink} to="/ManageOrder#ManageOrder">Manage Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/addServices#/addServices">Add Service</Nav.Link> */}
                        <Nav.Link as={HashLink} to="/adminDashboard#/adminDashboard">DashBoard</Nav.Link>

                        {/* <Nav.Link as={HashLink} to="/admin#/admin">                    <button
                            onClick={logOut}
                            className="items btn btn-info p-1 "
                        >
                            Logout
                        </button></Nav.Link> */}



                        {user?.email ?
                            <Button onClick={logout} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}


                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;