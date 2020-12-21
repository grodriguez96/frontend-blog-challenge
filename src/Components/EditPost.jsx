import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FormPost from "./FormPost";
import { PostContext } from "../Providers/PostContext";

export default function EditPost() {
  const { id } = useParams();
  const [post] = useContext(PostContext);
  const paramId = parseInt(id);
  const postFinded = post.find((post) => post.id === paramId);

  return postFinded ? (
    <div className="mt-5">
      <h3 className="text-center">Formulario de Edicion</h3>{" "}
      <FormPost post={postFinded} />
    </div>
  ) : (
    "No hay resultado"
  );
}
