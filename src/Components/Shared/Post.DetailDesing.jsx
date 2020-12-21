import React from "react";
import Card from "react-bootstrap/Card";

export default function PostDetailDesign({ post }) {
  return (
    <Card className="text-center">
      <Card.Header>
        <Card.Title>{post.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <img
          className="w-50"
          src={
            post.image ||
            "https://logos.flamingtext.com/Word-Logos/prueba-design-sketch-name.png"
          }
          alt=""
        />
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
