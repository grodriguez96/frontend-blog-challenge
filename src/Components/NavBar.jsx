import React, { useContext } from "react";
import { PostContext } from "../Providers/PostContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [post] = useContext(PostContext);

  const NavLinks = [
    {
      name: "Inicio",
      id: 1,
      path: "/",
    },
    {
      name: "Crear Nuevo",
      id: 2,
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
            <Nav.Link>
              <Link to={link.path} key={link.id}>
                {link.name}
              </Link>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
