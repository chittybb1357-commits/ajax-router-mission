import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostNew({ onCreate }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해 주세요.");

      return;
    }

    const newId = String(Date.now());
    const today = new Date().toISOString().split("T")[0];
    const newPost = {
      id: newId,
      title: title,
      content: content,
      date: today,
    };

    onCreate(newPost);

    alert("글이 성공적으로 등록되었습니다.");

    navigate(`/posts/${newId}`);
  };

  return (
    <section
      style={{
        padding: "20px",
      }}
    >
      <h1
        s
        tyle={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        새 글 작성
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
            placeholder="제목을 입력하세요"
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
            placeholder="내용을 입력하세요"
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

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            등록
          </button>

          <button
            type="button"
            onClick={() => navigate("/posts")}
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

export default PostNew;
