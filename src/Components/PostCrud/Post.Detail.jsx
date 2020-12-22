import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCardDetail from "../Shared/Post.CardDetail";
import PostAvatar from "../Shared/Post.Avatar";
import API from "../../Providers/Api";

export default function DetailPost() {
  const { id } = useParams();
  const paramId = parseInt(id);
  const [post, setPost] = useState();

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const res = await API.get(`/${paramId}`);
      setPost(res.data);
    } catch (err) {
      alert(err);
      console.error(err);
    }
  };

  return post !== undefined ? (
    <div className="m-5">
      <h3 className="text-center mb-5"> Detalle de la publicacion</h3>
      <div className="w-50 container">
        <h6 className="text-center mb-2">Creada por :</h6>
        <PostAvatar userId={post.userId} />
        <PostCardDetail post={post} />
      </div>
    </div>
  ) : (
    "No hay resultado"
  );
}
