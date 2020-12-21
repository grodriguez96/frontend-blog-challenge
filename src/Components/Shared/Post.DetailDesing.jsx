import React from "react";
import Card from "react-bootstrap/Card";

export default function PostDetailDesign({ post }) {
  return (
    <Card className="text-center">
      <Card.Header>
        <Card.Title>{post.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
