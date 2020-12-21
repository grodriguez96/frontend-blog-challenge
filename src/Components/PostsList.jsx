import React, { useContext } from "react";
import { PostContext } from "../Providers/PostContext";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Post from "./Post";

export default function PostsList() {
  const [post] = useContext(PostContext);

  return (
    <div className="w-100 min-vh-100 overflow-hidden">
      <h3 className="text-center m-5">Lista de publicaciones</h3>
      <CardColumns className="m-auto" style={{ width: "98%" }}>
        {post.length > 0
          ? post.map((post) => (
              <Card bg="light" text="dark">
                <Post title={post.title} id={post.id} user={post.userId} />
              </Card>
            ))
          : "Cargando"}
      </CardColumns>
    </div>
  );
}
