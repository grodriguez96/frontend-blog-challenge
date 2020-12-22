import React from "react";
import Card from "react-bootstrap/Card";
import PostButton from "./Post.Button";
import PostAvatar from "./Post.Avatar";

export default function PostCard({ post }) {
  const methods = [
    { name: "far fa-eye", path: "detail" },
    { name: "far fa-edit", path: "edit" },
    { name: "far fa-trash-alt", path: "delete" },
  ];

  return (
    <div className="p-3 text-center">
      <PostAvatar userId={post.userId} />
      <Card.Title>{post.title}</Card.Title>
      <Card.Body>
        <PostButton methods={methods} id={post.id} />
      </Card.Body>
    </div>
  );
}
