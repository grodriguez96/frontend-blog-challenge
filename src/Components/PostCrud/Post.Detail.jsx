import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../Providers/PostContext";

export default function DetailPost() {
  const [post] = useContext(PostContext);

  const { id } = useParams();
  const paramId = parseInt(id);
  const postFinded = post.find((post) => post.id === paramId);
  return postFinded ? (
    <div>
      {postFinded.title} <br />
      {postFinded.body} <br />
      {postFinded.userId}
    </div>
  ) : (
    "No hay resultado"
  );
}
