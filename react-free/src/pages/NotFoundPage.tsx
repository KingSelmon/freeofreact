import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <main className="not-found">
      <div>
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>주소가 올바른지 다시 확인해 주세요.</p>
        <Link className="button" to="/dashboard">
          대시보드로 이동
        </Link>
      </div>
    </main>
  );
}
