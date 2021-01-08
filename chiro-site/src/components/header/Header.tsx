import React from "react";
import {Nav, Navbar} from "react-bootstrap";

export const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed={"top"} bg="light">
                <Navbar.Brand href={'/'}>Chiro sint-jozef jongens</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
                    <Nav>
                        <Nav.Link href='/chiro'>Wat is Chiro?</Nav.Link>
                        <Nav.Link href='/brieven'>Brieven</Nav.Link>
                        <Nav.Link href='/maandprogramma'>Maandprogramma's</Nav.Link>
                        <Nav.Link href='/leidingsploeg'>Leidingsploeg</Nav.Link>
                        <Nav.Link href='/jeneveravond'>Jeneveravond</Nav.Link>
                        <Nav.Link href='/inschrijven'>Inschrijven</Nav.Link>
                        <Nav.Link href='/verhuur'>Verhuur</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}