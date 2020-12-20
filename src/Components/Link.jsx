import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Link({ name }) {
  return <Nav.Link>{name}</Nav.Link>;
}
