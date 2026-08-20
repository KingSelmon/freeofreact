import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
export function AdminLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="admin-shell">
      <Sidebar open={open} close={() => setOpen(false)} />
      <main className="main-area">
        <Header menu={() => setOpen((v) => !v)} />
        <Outlet />
      </main>
    </div>
  );
}
