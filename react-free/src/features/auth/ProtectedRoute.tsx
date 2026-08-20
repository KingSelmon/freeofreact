import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
export function ProtectedRoute() {
  const { admin } = useAuth();
  const location = useLocation();
  return admin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
