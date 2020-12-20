import Navbar from "./Components/NavBar";
import PostsList from "./Components/PostsList";
import "./App.css";
import { PostProvider } from "./Providers/PostContext";
import AddPost from "./Components/AddPost";

function App() {
  return (
    <PostProvider>
      <div className="app">
        <Navbar />
        <PostsList />
        <AddPost />
      </div>
    </PostProvider>
  );
}

export default App;
