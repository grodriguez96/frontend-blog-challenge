import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostCardDetail from "../Shared/Post.CardDetail";
import Button from "react-bootstrap/Button";
import { PostContext } from "../../Providers/PostContext";
import PostAvatar from "../Shared/Post.Avatar";
import API from "../../Providers/Api";
export default function DeletePost() {
  const [post, setPost] = useContext(PostContext);
  const history = useHistory();
  const { id } = useParams();
  const paramId = parseInt(id);
  const postFound = post.find((post) => post.id === paramId);

  const deletePos = async () => {
    try {
      await API.delete(`${paramId}`);
      const array = [...post];
      const index = array.findIndex((post) => post.id === paramId);
      array.splice(index, 1);
      setPost([...array]);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return postFound ? (
    <div className="m-5">
      <h3 className="text-center mb-5">Desea eliminar esta publicacion ?</h3>
      <div className="container w-50">
        <h6 className="text-center mb-2">Creada por :</h6>
        <PostAvatar userId={post.userId} />

        <PostCardDetail post={post} />

        <div className="text-center mt-3">
          <Button variant="primary" onClick={deletePos}>
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  ) : (
    "No hay resultado"
  );
}
