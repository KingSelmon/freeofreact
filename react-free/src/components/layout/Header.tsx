import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/useAuth";

const pageTitles: Record<string, string> = {
  "/dashboard": "대시보드",
  "/users": "사용자 관리",
  "/orders": "주문 관리",
  "/settings": "환경 설정",
};

interface HeaderProps {
  menu: () => void;
}

export function Header({ menu }: HeaderProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { admin, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="topbar">
      <div>
        <button
          type="button"
          className="icon-button menu-button"
          aria-label="메뉴 열기"
          onClick={menu}
        >
          ☰
        </button>
        <strong>{pageTitles[pathname] ?? "관리자"}</strong>
      </div>

      <div className="top-actions">
        <button type="button" className="icon-button" aria-label="알림">
          ♢
        </button>
        <span className="avatar">{admin?.name[0]}</span>
        <div className="profile">
          <strong>{admin?.name}</strong>
          <small>{admin?.email}</small>
        </div>
        <button className="button secondary" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </header>
  );
}
