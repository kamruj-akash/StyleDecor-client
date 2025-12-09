import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/common/Loading";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const MyBookings = () => {
  const { user } = useAuth();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["my-booking", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure("/bookings");
      return data;
    },
  });
  const badgeClasses = {
    Completed: "bg-green-100 text-green-700",
    Setup: "bg-blue-100 text-blue-700",
    "On The Way": "bg-blue-100 text-blue-600",
    Planning: "bg-yellow-100 text-yellow-700",
    Pending: "bg-yellow-100 text-yellow-600",
  };
  if (isLoading) return <Loading />;

  const handlePayment = (item) => {
    console.log(item);
  };

  return (
    <div className="w-full p-6 lg:p-10">
      {/* PAGE HEADER */}
      <h1 className="text-3xl font-bold">My Bookings</h1>
      <p className="text-base-content/60 mb-8">
        Review and manage your upcoming and past decoration services.
      </p>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="px-4 py-2 bg-white rounded-xl border border-base-300 shadow-sm hover:bg-base-100 transition">
          Sort by Date ⌄
        </button>
        <button className="px-4 py-2 bg-white rounded-xl border border-base-300 shadow-sm hover:bg-base-100 transition">
          Filter by Status ⌄
        </button>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden">
        <table className="table-auto w-full">
          {/* TABLE HEADER */}
          <thead className="bg-[#F7F7FB] text-sm font-semibold text-base-content/60">
            <tr>
              <th className="py-4 px-6 text-left">BOOKING ID</th>
              <th className="text-left">SERVICE</th>
              <th className="text-left">EVENT DATE</th>
              <th className="text-left">TOTAL COST</th>
              <th className="text-left">STATUS</th>
              <th className="text-left">ACTION</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {bookings.map((item, idx) => (
              <tr
                key={idx}
                className="border-t border-base-200 hover:bg-base-50 transition"
              >
                {/* BOOKING ID */}
                <td className="py-5 px-6 font-medium text-[#8363D8]">
                  #{item.bookingId}
                </td>

                {/* SERVICE NAME */}
                <td className="font-medium">{item.service_name}</td>

                {/* DATE */}
                <td className="text-base-content/60">{item.serviceDate}</td>

                {/* COST */}
                <td className="font-medium">{item.cost}</td>

                {/* STATUS */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      badgeClasses[item.status]
                    }`}
                  >
                    {item.status === "Payment Pending" ? (
                      <button
                        onClick={() => handlePayment(item)}
                        className="btn bg-purple-600 text-white"
                      >
                        Pay
                      </button>
                    ) : (
                      item.status
                    )}
                  </span>
                </td>

                {/* ACTION → CANCEL ONLY */}
                <td>
                  <button className="text-red-500 hover:underline text-sm font-medium">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
