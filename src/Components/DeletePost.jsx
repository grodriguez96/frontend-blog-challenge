import React, { useContext } from "react";
import { PostContext } from "../Providers/PostContext";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [post, setPost] = useContext(PostContext);

  const deletePos = () => {
    const array = [...post]; // make a separate copy of the array
    const index = array.findIndex((post) => post.id === paramId);
    array.splice(index, 1);
    setPost([...array]);
  };
  const { id } = useParams();
  const paramId = parseInt(id);
  const postFinded = post.find((post) => post.id === paramId);
  return postFinded ? (
    <div>
      {postFinded.title} <br />
      {postFinded.body} <br />
      {postFinded.userId} <br />
      <button onClick={deletePos}>Eliminar</button>
    </div>
  ) : (
    "No hay resultado"
  );
}
