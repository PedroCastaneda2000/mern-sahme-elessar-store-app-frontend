import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

const AdminProtectedRoute = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated && user?.email === adminEmail) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export default AdminProtectedRoute;
