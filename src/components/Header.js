import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/img/logo.svg';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            {['lg'].map((expand) => (
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
                                <Nav.Link href="/">_home</Nav.Link>
                                <Nav.Link href="#action2">_about</Nav.Link>
                                <Nav.Link href="#action3">_portfolio</Nav.Link>
                                <Nav.Link href="#action4">_services</Nav.Link>
                                <Nav.Link href="#action5">_contact</Nav.Link>
                            </Nav>
                            <Link to="/home" className="primary-btn">Let's Talk</Link>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}