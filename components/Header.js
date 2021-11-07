import Link from 'next/link'
import style from '@/styles/header.module.scss';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import Image from 'next/image'


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Container>
                <Navbar.Brand href="#home"><img className={style.logo} src="../images/logo.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#portfolio">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link href="#process">
                            About Us
                        </Nav.Link>
                        <Nav.Link href="#contactus">
                            Contact Us
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
