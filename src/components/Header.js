import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-color">
                    <Container>
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">About Me</Nav.Link>
                                <Nav.Link href="#action2">Our Portfolio</Nav.Link>
                                <Nav.Link href="#action2">Services</Nav.Link>
                                <Nav.Link href="#action2">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}