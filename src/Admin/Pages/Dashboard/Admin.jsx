import { useQuery } from "@tanstack/react-query";
import { CalendarDays, CreditCard, Paintbrush, Users } from "lucide-react";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const Admin = () => {
  const { data: allUsers = [] } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return data;
    },
  });

  const { data: bookings = [] } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const { data } = await axiosSecure("/bookings");
      return data;
    },
  });

  const users = allUsers.filter((item) => item.role === "user");
  const decorator = allUsers.filter((item) => item.role === "decorator");
  const paidBooking = bookings.filter((item) => item.paymentStatus === "paid");
  const totalEarn = paidBooking?.reduce(
    (total, booking) => total + Number(booking.cost),
    0
  );

  return (
    <div className="p-6 lg:p-10 space-y-10">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-base-content/60 text-sm">
          Overview of platform activity and performance metrics.
        </p>
      </div>

      {/* TOP GRID CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* TOTAL USERS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base-content/60 text-sm">Total Users</p>
              <h2 className="text-3xl font-bold text-gray-900">
                {users?.length}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Users className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL BOOKINGS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base-content/60 text-sm">Total Bookings</p>
              <h2 className="text-3xl font-bold text-gray-900">
                {paidBooking?.length}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <CalendarDays className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL REVENUE */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base-content/60 text-sm">Total Revenue</p>
              <h2 className="text-3xl font-bold text-gray-900">
                ৳ {totalEarn}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <CreditCard className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL DECORATORS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base-content/60 text-sm">Total Decorators</p>
              <h2 className="text-3xl font-bold text-gray-900">
                {decorator.length}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Paintbrush className="text-purple-600" size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
