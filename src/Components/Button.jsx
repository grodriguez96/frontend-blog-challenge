import React from "react";
import Button from "react-bootstrap/Button";

export default function Btn(props) {
  return <Button variant="primary">{props.name}</Button>;
}
