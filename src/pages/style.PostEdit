import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function PostEdit({ posts, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => String(p.id) === String(id));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (!post) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>수정할 게시글을 찾을 수 없습니다.</h2>

        <Link to="/posts">목록으로 돌아가기</Link>
      </div>
    );
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해 주세요.");

      return;
    }

    const updatedPost = {
      ...post,
      title: title,
      content: content,
    };

    onUpdate(updatedPost);

    alert("글이 성공적으로 수정되었습니다.");

    navigate(`/posts/${post.id}`);
  };

  return (
    <section style={{ padding: "20px" }}>
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        글 수정하기
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "600px",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            제목
          </label>

          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            내용
          </label>

          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows="10"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              resize: "vertical",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            수정 완료
          </button>

          <button
            type="button"
            onClick={() => navigate(`/posts/${post.id}`)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
        </div>
      </form>
    </section>
  );
}

export default PostEdit;
