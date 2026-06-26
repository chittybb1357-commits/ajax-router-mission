import { Link } from "react-router-dom";

function Posts({ posts }) {
  return (
    <section style={{ padding: "20px" }}>
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        글 목록
      </h1>

      {!posts || posts.length === 0 ? (
        <p>등록된 게시글이 없습니다.</p>
      ) : (
        <ul
          style={{
            lineHeight: "2.2",
            fontSize: "18px",
            paddingLeft: "20px",
          }}
        >
          {posts.map(p => (
            <li key={p.id} style={{ marginBottom: "10px" }}>
              <Link
                to={`/posts/${p.id}`}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  marginRight: "8px",
                }}
              >
                {p.title}
              </Link>

              <span
                style={{
                  color: "#333",
                  fontSize: "16px",
                }}
              >
                {p.date}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Posts;
