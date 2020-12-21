import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PostContext = createContext();

export function PostProvider(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [post, setPost] = useState([]);

  const fetchItems = async () => {
    try {
      const data = await axios.get(
        "http://localhost:4000/posts/" ///ESTO ES LO QUE HAY QUE VARIAR
      );
      setPost(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PostContext.Provider value={[post, setPost]}>
      {props.children}
    </PostContext.Provider>
  );
}
