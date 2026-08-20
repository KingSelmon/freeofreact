import { createContext } from "react";

export interface Admin {
  name: string;
  email: string;
}

export interface AuthContextValue {
  admin: Admin | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
