import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostDetailDesign from "../Shared/Post.DetailDesing";
import { PostContext } from "../../Providers/PostContext";
import PostAvatar from "../Shared/Post.Avatar";

export default function DetailPost() {
  const [post] = useContext(PostContext);

  const { id } = useParams();
  const paramId = parseInt(id);
  const postFound = post.find((post) => post.id === paramId);

  return postFound ? (
    <div className="m-5">
      <h3 className="text-center mb-5"> Detalle de la publicacion</h3>
      <div className="w-50 container">
        <h6 className="text-center mb-2">Creada por :</h6>
        <PostAvatar userId={postFound.userId} />
        <PostDetailDesign post={postFound} />
      </div>
    </div>
  ) : (
    "No hay resultado"
  );
}
