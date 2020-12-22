import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../Providers/PostContext";
import NotFound from "./Shared/NotFound";
import PostList from "./Shared/Post.List";
import SpinnerLoading from "./Shared/SpinnerLoading";

export default function PostsList() {
  const [post] = useContext(PostContext);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setShowLoading(true), 7000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  console.log();
  return (
    <div>
      <h3 className="text-center mt-5">Lista de publicaciones</h3>
      <h6 className="text-center mb-5">
        Hay un total de : {post.length} publicaciones
      </h6>
      {post.length ? (
        <PostList post={post} />
      ) : !showLoading ? (
        <SpinnerLoading />
      ) : (
        <NotFound />
      )}
    </div>
  );
}
