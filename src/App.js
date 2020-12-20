import Navbar from "./Components/NavBar";
import PostsList from "./Components/PostsList";
import "./App.css";
import { PostProvider } from "./Providers/PostContext";
import AddPost from "./Components/AddPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <PostProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PostsList} />
          <Route path="/add" component={AddPost} />
        </Switch>
      </PostProvider>
    </Router>
  );
}

export default App;
