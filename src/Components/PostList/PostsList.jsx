import React, { useContext } from "react";
import { PostContext } from "../../Providers/PostContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Post from "../Post";
import "./PostList.css";

export default function PostsList() {
  const [post] = useContext(PostContext);

  return (
    <div className="post-list w-100 overflow-hidden">
      <div className="container">
        {post.length > 0
          ? post.map((post) => (
              <Card className="col-sm mt-2 mb-2">
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Post title={post.title} id={post.id} />
                  </ListGroupItem>
                </ListGroup>
              </Card>
            ))
          : "Cargando"}
      </div>
    </div>
  );
}
