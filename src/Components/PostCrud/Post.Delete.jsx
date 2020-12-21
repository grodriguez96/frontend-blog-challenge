import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostDetailDesign from "../Shared/Post.DetailDesing";
import Button from "react-bootstrap/Button";
import { PostContext } from "../../Providers/PostContext";
import PostAvatar from "../Shared/Post.Avatar";

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
  const postFound = post.find((post) => post.id === paramId);
  return postFound ? (
    <div className="m-5">
      <h3 className="text-center mb-5">Desea eliminar esta publicacion ?</h3>

      <div className="container w-50">
        <h6 className="text-center mb-2">Creada por :</h6>
        <PostAvatar userId={postFound.userId} />

        <PostDetailDesign post={postFound} />
      </div>
      <div className="text-center mt-3">
        <Button variant="primary" onClick={deletePos}>
          Eliminar
        </Button>
      </div>
    </div>
  ) : (
    "No hay resultado"
  );
}
