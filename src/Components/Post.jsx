import React from "react";

export default function Post(props) {
  return (
    <div>
      <h5>{props.title}</h5> <br />
      <p>{props.body}</p>
    </div>
  );
}
