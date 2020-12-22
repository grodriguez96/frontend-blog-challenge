import React from "react";
import { Link } from "react-router-dom";

export default function PostButton({ methods, id }) {
  return methods.map((method) => (
    <div className="d-inline-block m-1">
      <Link to={`/${method.path}/${id}`}>
        <i className={method.name}></i>
      </Link>
    </div>
  ));
}
