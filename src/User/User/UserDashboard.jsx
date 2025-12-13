import { useQuery } from "@tanstack/react-query";
import { CalendarDays, CreditCard } from "lucide-react";
import Loading from "../../Components/common/Loading";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const UserDashboard = () => {
  const { user } = useAuth();
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure("/bookings");
      return data;
    },
  });

  if (isLoading) return <Loading />;

  const totalSpent = bookings
    ?.filter((b) => b.paymentStatus === "paid")
    .reduce((total, booking) => total + Number(booking.cost), 0);

  return (
    <div className="p-6 lg:p-10 space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back 👋</h1>
        <p className="text-base-content/60">
          Manage your bookings and payments from here.
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* TOTAL BOOKINGS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">Total Bookings</p>
              <h2 className="text-3xl font-bold text-gray-900">
                {bookings?.length}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <CalendarDays className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL SPENT */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">Total Spent</p>
              <h2 className="text-3xl font-bold text-gray-900">
                ৳ {totalSpent}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <CreditCard className="text-purple-600" size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
