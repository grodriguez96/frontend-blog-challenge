import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Link(props) {
  return <Nav.Link>{props.name}</Nav.Link>;
}
