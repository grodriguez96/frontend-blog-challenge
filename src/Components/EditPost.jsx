import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../Providers/PostContext";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useContext(PostContext);
  const updateTile = (e) => {
    setTitle(e.target.value);
  };

  const updateBody = (e) => {
    setBody(e.target.value);
  };

  const updatePost = (e) => {
    e.preventDefault();
    const array = [...post]; // make a separate copy of the array
    const index = array.findIndex((post) => post.id === paramId);
    array.splice(index, 1, { title: title, body: body, id: postFinded.id });

    setPost([...array]);
  };
  const { id } = useParams();
  const paramId = parseInt(id);
  const postFinded = post.find((post) => post.id === paramId);
  return postFinded ? (
    <form onSubmit={updatePost}>
      <input
        type="text"
        name="title"
        required
        value={title}
        placeholder={postFinded.title}
        onChange={updateTile}
      />
      <input
        type="text"
        name="body"
        required
        value={body}
        placeholder={postFinded.body}
        onChange={updateBody}
      />
      <button type="submit">Crear</button>
    </form>
  ) : (
    "No hay resultado"
  );
}
