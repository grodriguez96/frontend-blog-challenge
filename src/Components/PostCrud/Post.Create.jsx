import React from "react";
import FormPost from "../Shared/Post.Form";

export default function CreatePost() {
  return (
    <div className="mt-5">
      <h3 className="text-center">Formulario de creacion</h3>
      <FormPost action="add" />
    </div>
  );
}
