import { Navigate } from "react-router";
import Loading from "../Components/common/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <Loading />;
  if (user) {
    return children;
  } else {
    <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
