import React, { createContext, useEffect, useState } from "react";
import API from "./Api";

export const PostContext = createContext();

export function PostProvider(props) {
  useEffect(() => {
    getItems();
  }, []);

  const [post, setPost] = useState([]);

  const getItems = async () => {
    const data = await API.get();
    setPost(data.data);
  };

  return (
    <PostContext.Provider value={[post, setPost]}>
      {props.children}
    </PostContext.Provider>
  );
}
