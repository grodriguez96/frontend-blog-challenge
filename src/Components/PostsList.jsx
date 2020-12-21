import React, { useContext } from "react";
import { PostContext } from "../Providers/PostContext";
import Post from "./Post";
import { Link } from "react-router-dom";

export default function PostsList() {
  // eslint-disable-next-line no-unused-vars
  const [post, setPost] = useContext(PostContext);

  return (
    <div>
      {post.length > 0
        ? post.map((post) => [
            <Post title={post.title} key={post.id} id={post.id} />,
            <Link to={`/edit/${post.id}`} key={post.id}>
              editar
            </Link>,
            <Link to={`/delete/${post.id}`} key={post.id}>
              eliminar
            </Link>,
          ])
        : "Cargando"}
    </div>
  );
}
