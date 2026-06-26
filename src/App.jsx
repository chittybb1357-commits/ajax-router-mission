import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import PostNew from "./pages/PostNew.jsx";
import PostEdit from "./pages/PostEdit.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isAlive = true;

    fetch("./data/blog.json")
      .then(res => res.json())
      .then(data => {
        if (isAlive) {
          setPosts(data);
          setLoaded(true);
        }
      })
      .catch(err => {
        console.error("데이터 로딩 실패:", err);

        if (isAlive) {
          setLoaded(true);
        }
      });

    return () => {
      isAlive = false;
    };
  }, []);

  const handleCreate = newPost => {
    setPosts(prev => [newPost, ...prev]);
  };
  const handleUpdate = updatedPost => {
    setPosts(prev => prev.map(post => (post.id === updatedPost.id ? updatedPost : post)));
  };
  const handleDelete = id => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <Routes>
      <Route element={<Layout loaded={loaded} />}>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/posts/new" element={<PostNew onCreate={handleCreate} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} onDelete={handleDelete} />} />
        <Route
          path="/posts/:id/edit"
          element={<PostEdit posts={posts} onUpdate={handleUpdate} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
