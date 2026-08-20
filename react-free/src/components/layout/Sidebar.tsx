import { NavLink } from "react-router-dom";
const menus = [
  ["/dashboard", "▦", "대시보드"],
  ["/users", "♙", "사용자 관리"],
  ["/orders", "▤", "주문 관리"],
  ["/settings", "⚙", "환경 설정"],
];
export function Sidebar({ open, close }: { open: boolean; close: () => void }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="brand">
        <span>A</span>AdminFlow
      </div>
      <small>MANAGEMENT</small>
      <nav>
        {menus.map(([to, icon, label]) => (
          <NavLink
            key={to}
            to={to}
            onClick={close}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <i>{icon}</i>
            {label}
          </NavLink>
        ))}
      </nav>
      <footer>
        AdminFlow v1.0
        <br />© 2026 Your Company
      </footer>
    </aside>
  );
}
