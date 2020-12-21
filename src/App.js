import Navbar from "./Components/NavBar";
import PostsList from "./Components/PostList/PostsList";
import "./App.css";
import { PostProvider } from "./Providers/PostContext";
import AddPost from "./Components/AddPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPost from "./Components/DetailPost";
import EditPost from "./Components/EditPost";
import DeletePost from "./Components/DeletePost";

function App() {
  return (
    <Router>
      <PostProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PostsList} />
          <Route path="/add" component={AddPost} />
          <Route path="/detail/:id" component={DetailPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/delete/:id" component={DeletePost} />
        </Switch>
      </PostProvider>
    </Router>
  );
}

export default App;
