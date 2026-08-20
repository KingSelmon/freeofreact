import { useMemo, useState, type ReactNode } from "react";
import { AuthContext, type Admin, type AuthContextValue } from "./auth-context";

const SESSION_STORAGE_KEY = "admin-session";
const DEMO_EMAIL = "admin@example.com";
const DEMO_PASSWORD = "admin1234";

function getStoredAdmin(): Admin | null {
  const storedAdmin = localStorage.getItem(SESSION_STORAGE_KEY);

  if (!storedAdmin) return null;

  try {
    return JSON.parse(storedAdmin) as Admin;
  } catch {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    return null;
  }
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [admin, setAdmin] = useState<Admin | null>(getStoredAdmin);

  const contextValue = useMemo<AuthContextValue>(
    () => ({
      admin,
      async login(email, password) {
        await new Promise((resolve) => setTimeout(resolve, 350));

        if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
          throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
        }

        const loggedInAdmin: Admin = { name: "김관리", email };

        localStorage.setItem(
          SESSION_STORAGE_KEY,
          JSON.stringify(loggedInAdmin),
        );
        setAdmin(loggedInAdmin);
      },
      logout() {
        localStorage.removeItem(SESSION_STORAGE_KEY);
        setAdmin(null);
      },
    }),
    [admin],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
