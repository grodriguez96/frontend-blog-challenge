import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PostContext } from "../../Providers/PostContext";

export default function FormPost(props) {
  const [post, setPost] = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const updateTile = (e) => {
    setTitle(e.target.value);
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const addPost = (e) => {
    e.preventDefault();
    setPost((prevPost) => [
      ...prevPost,
      {
        title: title,
        body: body,
        id: Math.floor(Math.random() * (10000 - 101)) + 101,
      },
    ]);
    history.push("/");
  };

  const updatePost = (e) => {
    e.preventDefault();
    const array = [...post];
    const index = array.findIndex((post) => post.id === props.post.id);
    array.splice(index, 1, { title: title, body: body, id: props.post.id });
    setPost([...array]);
    history.push("/");
  };

  return (
    <div className="m-auto w-50 pt-5">
      <Form onSubmit={props.action === "add" ? addPost : updatePost}>
        <Form.Group controlId="title">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            name="title"
            required
            value={title}
            onChange={updateTile}
            placeholder={props.action === "add" ? "" : props.post.title}
          />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Texto</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="body"
            required
            value={body}
            onChange={updateBody}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {props.action === "add" ? "Crear" : "Editar"}
        </Button>
      </Form>
    </div>
  );
}
