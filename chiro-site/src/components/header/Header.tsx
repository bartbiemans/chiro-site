import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import Image from "react-bootstrap/Image";

export const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed={"top"} bg="light">
                <Navbar.Brand href={'/'}>Chiro sint-jozef jongens</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
                    <Nav>
                        <Nav.Link href='/chiro'>Wat is chiro</Nav.Link>
                        <Nav.Link href='#'>Brieven</Nav.Link>
                        <Nav.Link href='#'>Maandprogramma's</Nav.Link>
                        <Nav.Link href='/leidingsploeg'>Leidingsploeg</Nav.Link>
                        <Nav.Link href='/jeneveravond'>Jeneveravond</Nav.Link>
                        <Nav.Link href='/inschrijven'>Inschrijven</Nav.Link>
                        <Nav.Link href='/verhuur'>Verhuur</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Image src={'../../../../wide-image.jpg'} fluid/>
        </>
    )
}