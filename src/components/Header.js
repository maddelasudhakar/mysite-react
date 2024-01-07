import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/img/logo.svg';

export default function Header() {
    return (
        <>
            {['false'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-color">
                    <Container>
                        <Navbar.Brand href="#"><Image src={logo} alt="Maddela Designs"></Image></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#action2">About Me</Nav.Link>
                                <Nav.Link href="#action3">Our Portfolio</Nav.Link>
                                <Nav.Link href="#action4">Services</Nav.Link>
                                <Nav.Link href="#action5">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}