import React from "react";
import Card from "react-bootstrap/Card";

export default function PostCardDetail({ post }) {
  const defaultImg =
    "https://logos.flamingtext.com/Word-Logos/prueba-design-sketch-name.png";
  return (
    <Card className="text-center">
      <Card.Header>
        <Card.Title>{post.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <img className="w-50" src={post.image || defaultImg} alt="" />
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
