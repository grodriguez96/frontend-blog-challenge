import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostDetailDesign from "../Shared/Post.DetailDesing";
import { PostContext } from "../../Providers/PostContext";

export default function DetailPost() {
  const [post] = useContext(PostContext);

  const { id } = useParams();
  const paramId = parseInt(id);
  const postFinded = post.find((post) => post.id === paramId);

  return postFinded ? (
    <div className="m-5">
      <h3 className="text-center mb-5"> Detalle de la publicacion</h3>
      <div className="w-50 m-auto">
        <PostDetailDesign post={postFinded} />
      </div>
    </div>
  ) : (
    "No hay resultado"
  );
}
