import React, { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export function PostProvider(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [post, setPost] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/post");
    const items = await data.json();
    setPost(items);
  };

  return (
    <PostContext.Provider value={[post, setPost]}>
      {props.children}
    </PostContext.Provider>
  );
}
