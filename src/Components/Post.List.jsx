import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import PostCard from "./Shared/Post.Card";

export default function PostList({ post }) {
  return (
    <CardColumns className="container" style={{ width: "98%" }}>
      {post.map((post) => (
        <Card bg="light" text="dark">
          <PostCard post={post} />
        </Card>
      ))}
    </CardColumns>
  );
}
