import React from "react";
import Card from "react-bootstrap/Card";

export default function PostDetailDesign({ post }) {
  return (
    <Card className="text-center">
      <Card.Header>{post.userId}</Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
