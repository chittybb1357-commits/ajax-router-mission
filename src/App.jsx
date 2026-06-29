import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // let alive = true; // 상품조회 시작..열일중...
    const controller = new AbortController(); // 초기화

    async function fetchData() {
      try {
        const res = await fetch("/data/blog.json", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("메시지");

        const data = await res.json();

        setPosts(data);
      } catch (e) {
        console.error(e);

        setPosts([]); // 에러시 목록 비움
      } finally {
        setLoaded(true);
      }
    }
    fetchData();

    console.log(posts);

    return () => {
      // alive = false;
      controller.abort();
    }; // 정리함수
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          {/* <Route path="posts" element={<Posts posts={posts} />} />
        <Route
          path="posts/:id"
          element={<PostDetail posts={} onDelete={}/>}
        />
        <Route path="*" element={<NotFound />}/> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
