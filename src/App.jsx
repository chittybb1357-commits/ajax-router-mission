import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // blog.json 파일에서 데이터를 가져옵니다.
    fetch("./data/blog.json")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoaded(true); // 로드 완료 표시
      })
      .catch(err => {
        console.error("데이터 로딩 실패:", err);
        setLoaded(true); // 에러가 나도 로딩 창은 끝나도록 처리
      });
  }, []);

  const handleDelete = id => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout loaded={loaded} />}>
        <Route index element={<Home posts={posts} />} />
        {/* 아래 주석 처리된 컴포넌트들도 구조에 맞게 구현되어 있어야 정상 동작합니다 */}
        {/* <Route path="posts" element={<Posts posts={posts} />} /> */}
        {/* <Route path="posts/:id" element={<PostDetail posts={posts} onDelete={handleDelete} />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
