import React, { useContext } from "react";
import { PostContext } from "../Providers/PostContext";
import Post from "./Post";

export default function PostsList() {
  const [post] = useContext(PostContext);

  return (
    <div>
      {post.length > 0
        ? post.map((post) => <Post title={post.title} id={post.id} />)
        : "Cargando"}
    </div>
  );
}
