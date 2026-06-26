import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout({ loaded }) {
  return (
    <div>
      <Header />
      {/* loaded가 true일 때만 하위 라우트(Outlet)를 보여주고, 아니면 로딩 중 표시 */}
      {!loaded ? <p>로딩 중...</p> : <Outlet />}
    </div>
  );
}
