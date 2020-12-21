import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Button";

export default function Post(props) {
  const methods = [
    { name: "Editar", path: "edit" },
    { name: "Eliminar", path: "delete" },
  ];

  return (
    <div>
      <Link to={`/detail/${props.id}`} key={props.id}>
        <h5>{props.title}</h5>
      </Link>
      {methods.map((method) => (
        <Link to={`/${method.path}/${props.id}`}>
          <Btn name={method.name} />
        </Link>
      ))}
    </div>
  );
}
