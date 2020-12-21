import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PostContext } from "../../Providers/PostContext";
import axios from "axios";

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

  const addPost = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      image:
        "https://logos.flamingtext.com/Word-Logos/prueba-design-china-name.png",
      id: Math.floor(Math.random() * (10000 - 101)) + 101,
      userId: 11,
      categoryId: 1,
    };
    try {
      await axios.post("http://localhost:4000/posts/", newPost);

      setPost((prevPost) => [...prevPost, newPost]);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      id: props.post.id,
      userId: props.post.userId,
      categoryId: props.post.categoryId,
      image: props.post.image,
    };

    try {
      await axios.patch(
        `http://localhost:4000/posts/${props.post.id}`,
        newPost
      );
      const array = [...post];
      const index = array.findIndex((post) => post.id === props.post.id);
      array.splice(index, 1, newPost);
      setPost([...array]);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container w-50 pt-5">
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
