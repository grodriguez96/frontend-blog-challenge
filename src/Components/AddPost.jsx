import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from "../Providers/PostContext";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [post, setPost] = useContext(PostContext);
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
  return (
    <form onSubmit={addPost}>
      <input
        type="text"
        name="title"
        required
        value={title}
        onChange={updateTile}
      />
      <input
        type="text"
        name="body"
        required
        value={body}
        onChange={updateBody}
      />

      <button type="submit">Crear</button>
    </form>
  );
}
