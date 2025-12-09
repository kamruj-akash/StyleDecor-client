import { Navigate } from "react-router";
import Loading from "../Components/common/Loading";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) return <Loading />;

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleBasedRoute;
