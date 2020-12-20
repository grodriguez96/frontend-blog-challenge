import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "./Link";

export default function NavBar() {
  const NavLinks = [
    {
      name: "Inicio",
    },
    { name: "Crear Nuevo" },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Blog Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          {NavLinks.map((link) => (
            <Link name={link.name} />
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
