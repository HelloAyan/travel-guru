import React from 'react';
import logo from '../../../assets/logo.png'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='img-responsive' src={logo} alt="Logo " width={120} height={56} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between ' >
                    <Nav style={{ width: '320px' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search Your Destination"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Nav>

                    <Nav className="d-flex justify-content-center align-item-center fs-5">
                        <div className='px-3'>News</div>
                        <div className='px-3'>Destination</div>
                        <div className='px-3'>Blog</div>
                        <div className='px-3'>Contact</div>
                        <Button variant="warning fs-6">Login</Button>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;