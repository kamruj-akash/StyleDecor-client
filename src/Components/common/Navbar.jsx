const navItems = [
  { name: "Services", path: "/services" },
  { name: "Coverage", path: "/coverage" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Circle, LogOut, User } from "lucide-react";
import { Link, NavLink } from "react-router";
import { SyncLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";
import Loading from "./Loading";

const Navbar = () => {
  const { user, logOut, setUser, loading } = useAuth();
  const { role, roleLoading } = useRole();
  const queryClient = useQueryClient();

  const { data: userInfo } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure("/users/me");
      return data;
    },
    enabled: !!user?.email,
  });

  const handleLogout = () => {
    logOut().then(() => {
      queryClient.invalidateQueries(["user-role"]);
      setUser(null);
    });
  };

  if (roleLoading) return <Loading />;

  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 navbar-start">
          <Circle className="text-purple-500 w-6 h-6" fill="#8b5cf6" />
          <span className="text-xl font-semibold text-black">StyleDecor</span>
        </Link>
        {/* Navigation Menu */}
        <ul className="hidden md:flex items-center gap-12 navbar-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-[17px] font-medium ${
                    isActive ? "text-purple-600" : "text-gray-800"
                  } hover:text-purple-500 transition`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar-end gap-5">
          {loading ? (
            <SyncLoader color="#8B5CF6" margin={2} size={7} />
          ) : !user ? (
            <Link to="/login" className="btn btn-primary btn-sm px-5">
              Login
            </Link>
          ) : (
            <>
              <Link
                to={`${
                  role === "user"
                    ? "/dashboard/home"
                    : role === "admin"
                    ? "/dashboard/admin"
                    : role === "decorator" && "/dashboard/decorator"
                }`}
                className="btn cursor-pointer btn-primary"
              >
                Dashboard
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src={userInfo?.photoURL}
                    alt="User"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-4 p-4 shadow bg-base-100 rounded-box w-56"
                >
                  <li className="mb-1 text-sm text-center font-semibold">
                    {/* {user?.displayName || "user"} */}
                  </li>

                  <li>
                    <Link to="/dashboard/profile">
                      <User size={18} /> Profile
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-error flex items-center gap-2"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
