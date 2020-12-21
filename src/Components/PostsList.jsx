import React, { useContext } from "react";
import { PostContext } from "../Providers/PostContext";
import Post from "./Post";

export default function PostsList() {
  // eslint-disable-next-line no-unused-vars
  const [post, setPost] = useContext(PostContext);
  return (
    <div>
      {post.length > 0
        ? post.map((post) => (
            <Post title={post.title} key={post.id} id={post.id} />
          ))
        : "Cargando"}
    </div>
  );
}
