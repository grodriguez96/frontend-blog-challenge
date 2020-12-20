import Navbar from "./Components/NavBar";
import PostsList from "./Components/PostsList";
import "./App.css";
import { PostProvider } from "./Providers/PostContext";

function App() {
  return (
    <PostProvider>
      <div className="app">
        <Navbar />
        <PostsList />
      </div>
    </PostProvider>
  );
}

export default App;
