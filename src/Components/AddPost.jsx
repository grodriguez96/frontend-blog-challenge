import React from "react";
import FormPost from "./FormPost";

export default function AddPost() {
  return (
    <div className="mt-5">
      <h3 className="text-center">Formulario de creacion</h3>
      <FormPost action="add" />
    </div>
  );
}
