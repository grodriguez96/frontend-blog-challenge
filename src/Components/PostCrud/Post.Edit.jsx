import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import FormPost from "../Shared/Post.Form";
import { PostContext } from "../../Providers/PostContext";

export default function EditPost() {
  const { id } = useParams();
  const [post] = useContext(PostContext);
  const paramId = parseInt(id);
  const postFound = post.find((post) => post.id === paramId);

  return postFound ? (
    <div className="mt-5">
      <h3 className="text-center">Formulario de Edicion</h3>
      <FormPost post={postFound} />
    </div>
  ) : (
    "No hay resultado"
  );
}
