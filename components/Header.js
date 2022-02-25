import Link from 'next/link'
import style from '@/styles/header.module.scss';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import Image from 'next/image'


export default function Header() {
    return (
        <div>
            <div className='container header-top d-flex justify-content-between'>
                <div className='logo'>
                    <Navbar.Brand href="#home"><img className={style.logo} src="../images/logo.png" /></Navbar.Brand>
                </div>
                <div id="quick-contact">
                    <ul>
                        <li className="quick-email">
                            <div className="header-box-icon">
                                <img src="../images/icons/email.png" />
                            </div>
                            <div className="header-box-info">
                                <strong>Email</strong>
                                <br />
                                <a href="mailto:eyethetalentproduction@gmail.com">
                                    <span>eyethetalentproduction@gmail.com </span>
                                </a>
                            </div>
                        </li>
                        <li className="quick-address">
                            <div className="header-box-icon">
                                <img src="../images/icons/address.png" />
                            </div>
                            <div className="header-box-info">
                                <strong>Address</strong>
                                <br />
                                <span>Mumbai, India</span>
                            </div>
                        </li>
                        <li className="open-time">
                            <div className="header-box-icon">
                                <img src="../images/icons/clock.png" />
                            </div>
                            <div className="header-box-info">
                                <strong>Opening Hour</strong>
                                <br />
                                <span>10:00 AM - 11:00 PM</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="default" sticky="top" className='nav'>
                <Container className='p-0'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#portfolio">
                                Portfolio
                            </Nav.Link>
                            <Nav.Link href="#process">
                                About Us
                            </Nav.Link>
                            <Nav.Link href="#team">
                                Our Team
                            </Nav.Link>
                            <Nav.Link href="#contactus">
                                Contact Us
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
