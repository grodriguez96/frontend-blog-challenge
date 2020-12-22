import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PostContext } from "../../Providers/PostContext";
import API from "../../Providers/Api";
export default function FormPost(props) {
  const [post, setPost] = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const updateTile = (e) => {
    setTitle(e.target.value);
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const updateCategory = (e) => {
    setCategory(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const ADD = "add";

  const addPost = async (e) => {
    e.preventDefault();

    let newPost = {
      title: title,
      body: body,
      image: image,
      userId: 11,
      categoryId: category,
    };
    try {
      const res = await API.post("/", newPost);
      newPost = {
        title: title,
        body: body,
        image: image,
        userId: 11,
        id: res.data.id,
        categoryId: category,
      };
      setPost((prevPost) => [...prevPost, newPost]);
      history.push("/");
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
      id: props.post.id,
      userId: props.post.userId,
      categoryId: category,
      image: image,
    };

    try {
      await API.patch(`/${props.post.id}`, newPost);
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
      <Form onSubmit={props.action === ADD ? addPost : updatePost}>
        <Form.Group controlId="title">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            name="title"
            required
            value={title}
            onChange={updateTile}
            placeholder={props.action === ADD ? "" : props.post.title}
            className="text-center"
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

        <Form.Group controlId="image">
          <Form.Label>Imagen url</Form.Label>
          <Form.Control
            type="text"
            rows={3}
            name="image"
            required
            value={image}
            onChange={updateImage}
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Categoria</Form.Label>
          <Form.Control as="select" onChange={updateCategory}>
            <option value="1">Cine</option>
            <option value="2">Comida</option>
            <option value="3">Ropa</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          {props.action === "add" ? "Crear" : "Editar"}
        </Button>
      </Form>
    </div>
  );
}
