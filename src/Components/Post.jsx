import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <div>
      <Link to={`/detail/${props.id}`} key={props.id}>
        <h5>{props.title}</h5> <br />
      </Link>
      <p>{props.body}</p>
    </div>
  );
}
