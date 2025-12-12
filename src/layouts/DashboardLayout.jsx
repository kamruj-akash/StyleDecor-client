import {
  CalendarDays,
  LayoutDashboardIcon,
  Paintbrush,
  ServerCogIcon,
  User,
} from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) return null;

  return (
    <div className="flex min-h-screen bg-[#F7F6FB]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-base-200 p-6 hidden lg:block">
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-bold mb-10 text-[#8E6CE4]"
        >
          StyleDecor
        </Link>

        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              to={"/dashboard/home"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                  isActive
                    ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                    : "text-base-content/70 hover:bg-base-100"
                }`
              }
            >
              <LayoutDashboardIcon size={20} />
              Dashboard
            </NavLink>
            {/* admin menu */}
            {role === "admin" && (
              <>
                <NavLink
                  to={"/dashboard/services"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                      isActive
                        ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                        : "text-base-content/70 hover:bg-base-100"
                    }`
                  }
                >
                  <ServerCogIcon size={20} />
                  Services
                </NavLink>
                <NavLink
                  to={"/dashboard/decorators"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                      isActive
                        ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                        : "text-base-content/70 hover:bg-base-100"
                    }`
                  }
                >
                  <Paintbrush size={20} />
                  Decorators
                </NavLink>
                <NavLink
                  to={"/dashboard/bookings"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                      isActive
                        ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                        : "text-base-content/70 hover:bg-base-100"
                    }`
                  }
                >
                  <CalendarDays size={20} />
                  Bookings
                </NavLink>
              </>
            )}

            {/* user menu */}
            {role === "user" && (
              <>
                <NavLink
                  to={"/dashboard/user/bookings"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                      isActive
                        ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                        : "text-base-content/70 hover:bg-base-100"
                    }`
                  }
                >
                  <CalendarDays size={20} />
                  My Bookings
                </NavLink>
                <NavLink
                  to={"/dashboard/user/payments"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                      isActive
                        ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                        : "text-base-content/70 hover:bg-base-100"
                    }`
                  }
                >
                  <ServerCogIcon size={20} />
                  Payment History
                </NavLink>
              </>
            )}

            {/* decorator menu */}
            {role === "decorator" && (
              <>
                <NavLink
                  to={"/dashboard/user/projects"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                      isActive
                        ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                        : "text-base-content/70 hover:bg-base-100"
                    }`
                  }
                >
                  <Paintbrush size={20} />
                  Assigned Projects
                </NavLink>
                <NavLink
                  to={"/dashboard/user/today"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                      isActive
                        ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                        : "text-base-content/70 hover:bg-base-100"
                    }`
                  }
                >
                  <CalendarDays size={20} />
                  Today's Schedule
                </NavLink>
              </>
            )}

            <NavLink
              to={"/dashboard/profile"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                  isActive
                    ? "bg-[#EFE8FF] text-[#8E6CE4] font-semibold"
                    : "text-base-content/70 hover:bg-base-100"
                }`
              }
            >
              <User size={20} />
              Profile
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-5">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
