import React from 'react';
import logo from '../../../assets/logo.png'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='img-responsive' src={logo} alt="Logo " width={120} height={56} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between' >
                    <Nav style={{ width: '320px' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search Your Destination"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Nav>

                    <Nav className="d-flex align-item-center">
                        <Nav.Link href="#home">News</Nav.Link>
                        <Nav.Link href="#link">Destination</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link" className='bg-warning ps-5'>
                            Login
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;