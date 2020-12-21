import React, { useContext } from "react";
import { PostContext } from "../Providers/PostContext";
import PostList from "./Post.List";

export default function PostsList() {
  const [post] = useContext(PostContext);

  return (
    <div>
      <h3 className="text-center mt-5">Lista de publicaciones</h3>
      <h6 className="text-center mb-5">
        Hay un total de : {post.length} publicaciones
      </h6>
      {post.length ? <PostList post={post} /> : "No hay datos que mostrar"}
    </div>
  );
}
