import React, { useContext } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import PostListDesign from "./Shared/Post.ListDesing";
import { PostContext } from "../Providers/PostContext";

export default function PostsList() {
  const [post] = useContext(PostContext);

  return (
    <div className="w-100 min-vh-100 overflow-hidden">
      <h3 className="text-center mt-5">Lista de publicaciones</h3>
      <h6 className="text-center mb-5">
        Hay un total de : {post.length} publicaciones
      </h6>
      <CardColumns className="m-auto" style={{ width: "98%" }}>
        {post.length
          ? post.map((post) => (
              <Card bg="light" text="dark">
                <PostListDesign
                  title={post.title}
                  id={post.id}
                  user={post.userId}
                />
              </Card>
            ))
          : "Cargando"}
      </CardColumns>
    </div>
  );
}
