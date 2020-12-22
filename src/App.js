import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Shared/NavBar";
import Home from "./Components/Home";
import CreatePost from "./Components/PostCrud/Post.Create";
import DetailPost from "./Components/PostCrud/Post.Detail";
import EditPost from "./Components/PostCrud/Post.Edit";
import DeletePost from "./Components/PostCrud/Post.Delete";
import { PostProvider } from "./Providers/PostContext";

import "./App.css";

function App() {
  return (
    <PostProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={CreatePost} />
          <Route path="/detail/:id" component={DetailPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/delete/:id" component={DeletePost} />
        </Switch>
      </Router>
    </PostProvider>
  );
}

export default App;
