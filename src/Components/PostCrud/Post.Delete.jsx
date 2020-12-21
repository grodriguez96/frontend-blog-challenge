import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostDetailDesign from "../Shared/Post.DetailDesing";
import Button from "react-bootstrap/Button";
import { PostContext } from "../../Providers/PostContext";

export default function DeletePost() {
  const [post, setPost] = useContext(PostContext);
  const history = useHistory();

  const deletePos = () => {
    const array = [...post]; // make a separate copy of the array
    const index = array.findIndex((post) => post.id === paramId);
    array.splice(index, 1);
    setPost([...array]);
    history.push("/");
  };
  const { id } = useParams();
  const paramId = parseInt(id);
  const postFinded = post.find((post) => post.id === paramId);
  return postFinded ? (
    <div className="m-5">
      <h3 className="text-center mb-5">Desea eliminar esta publicacion ?</h3>
      <div className="m-auto w-50">
        <PostDetailDesign post={postFinded} />
      </div>
      <div className="text-center mt-5">
        <Button variant="primary" onClick={deletePos}>
          Eliminar
        </Button>
      </div>
    </div>
  ) : (
    "No hay resultado"
  );
}
