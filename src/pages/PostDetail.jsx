import { useParams, Link, useNavigate } from "react-router-dom";

function PostDetail({ posts, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => String(p.id) === String(id));

  if (!post) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>게시글을 찾을 수 없습니다.</h2>

        <p>존재하지 않거나 삭제된 글 번호입니다.</p>

        <Link to="/posts">목록으로 돌아가기</Link>
      </div>
    );
  }

  const handleDeleteClick = () => {
    if (window.confirm("정말로 이 글을 삭제하시겠습니까?")) {
      onDelete(post.id);

      alert("삭제되었습니다.");

      navigate("/posts");
    }
  };

  return (
    <article style={{ padding: "20px", lineHeight: "1.6" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>{post.title}</h1>

      <p style={{ color: "#666", fontSize: "14px" }}>작성일: {post.date}</p>

      <hr style={{ margin: "20px 0" }} />

      <div style={{ minHeight: "200px", fontSize: "18px" }}>{post.content}</div>

      <hr style={{ margin: "20px 0" }} />

      <div style={{ display: "flex", gap: "10px" }}>
        <Link
          to={`/posts/${post.id}/edit`}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          수정
        </Link>

        <button
          onClick={handleDeleteClick}
          style={{
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          삭제
        </button>

        <Link
          to="/posts"
          style={{
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          목록
        </Link>
      </div>
    </article>
  );
}

export default PostDetail;
