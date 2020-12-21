import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import PostAvatar from "./Post.Avatar";

export default function PostListDesign(props) {
  const methods = [
    { name: "Detalle", path: "detail" },
    { name: "Editar", path: "edit" },
    { name: "Eliminar", path: "delete" },
  ];

  return (
    <div className="p-3 text-center d-block">
      <PostAvatar userId={props.userId} />
      <Card.Title>{props.title}</Card.Title>
      {methods.map((method) => (
        <div className="d-inline-block m-1">
          <Card.Footer>
            <Link to={`/${method.path}/${props.id}`}>
              <Card.Link>{method.name} </Card.Link>
            </Link>
          </Card.Footer>
        </div>
      ))}
    </div>
  );
}
