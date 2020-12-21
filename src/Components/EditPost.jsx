import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { PostContext } from "../Providers/PostContext";

export default function EditPost() {
  const { id } = useParams();
  const [post] = useContext(PostContext);
  const paramId = parseInt(id);
  const postFinded = post.find((post) => post.id === paramId);
  return postFinded ? <Form post={postFinded} /> : "No hay resultado";
}
