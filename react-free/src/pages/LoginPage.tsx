import { useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";

interface LoginLocationState {
  from?: { pathname: string };
}

export function LoginPage() {
  const { admin, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin1234");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (admin) return <Navigate to="/dashboard" replace />;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login(email, password);
      const state = location.state as LoginLocationState | null;
      navigate(state?.from?.pathname ?? "/dashboard", { replace: true });
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : "로그인에 실패했습니다.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-visual">
        <div className="brand">
          <span>A</span>AdminFlow
        </div>
        <div>
          <h1>운영의 모든 순간을 한눈에.</h1>
          <p>
            사용자, 주문, 매출 데이터를 하나의 관리자 대시보드에서 빠르고
            명확하게 관리하세요.
          </p>
        </div>
        <small>© 2026 AdminFlow</small>
      </section>

      <section className="login-wrap">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>관리자 로그인</h2>
          <p>계정 정보를 입력해 관리자 페이지로 이동하세요.</p>
          <label>
            이메일
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            비밀번호
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button className="button" disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
          <aside>체험 계정: admin@example.com / admin1234</aside>
        </form>
      </section>
    </main>
  );
}
