import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavBar() {
  const NavLinks = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Crear Nuevo",
      path: "/add",
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Blog Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          {NavLinks.map((link) => (
            <Link to={link.path}>{link.name}</Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
