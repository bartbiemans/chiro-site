import React from "react";
import Image from 'react-bootstrap/Image'
import  { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
    return (
        <div>
            <Image src={'../../../wide-image.jpg'} fluid/>
            <Navbar sticky={"top"} bg="light">
                <Navbar.Brand>Chiro sint-jozef jongens</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
                    <Nav>
                        <Nav.Link href='#'>Wat is chiro</Nav.Link>
                        <Nav.Link href='#'>Brieven</Nav.Link>
                        <Nav.Link href='#'>Leidingsploeg</Nav.Link>
                        <Nav.Link href='#'>Jeneveravond</Nav.Link>
                        <Nav.Link href='#'>Inschrijven</Nav.Link>
                        <Nav.Link href='#'>Wat is chiro</Nav.Link>
                        <Nav.Link href='#'>Verhuur</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}