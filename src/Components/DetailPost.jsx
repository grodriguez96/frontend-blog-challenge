import React, { useContext } from "react";
import { PostContext } from "../Providers/PostContext";
import { useParams } from "react-router-dom";

export default function PostDetail() {
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
