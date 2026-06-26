import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "40px", textAlign: "center", lineHeight: "1.8" }}>
      <h2 style={{ fontSize: "32px", color: "#dc3545", fontWeight: "bold" }}>
        404 - 페이지를 찾을 수 없습니다.
      </h2>

      <p style={{ fontSize: "18px", color: "#666", margin: "20px 0" }}>
        요청하신 주소는 존재하지 않거나, 변경 또는 삭제되었을 수 있습니다.
      </p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;
