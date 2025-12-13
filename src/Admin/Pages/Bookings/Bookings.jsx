import { useQuery } from "@tanstack/react-query";
import { CalendarDays, UserRoundSearchIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../../Components/common/Loading";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import AssignedModal from "./AssignedModal";

const Bookings = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [booking, setBooking] = useState(null);
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data } = await axiosSecure("/bookings?status=pending");
      return data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 lg:p-10">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Bookings</h1>
        <p className="text-base-content/60">
          View, filter and manage all user bookings.
        </p>
      </div>

      {/* BOOKINGS TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border border-base-200 overflow-hidden">
        <table className="table-auto w-full">
          {/* HEAD */}
          <thead className="bg-base-50 text-sm font-semibold text-base-content/70">
            <tr>
              <th className="py-4 px-6 text-left">BOOKING ID</th>
              <th className="text-left">USER</th>
              <th className="text-left">SERVICE</th>
              <th className="text-left">DATE</th>
              <th className="text-left">STATUS</th>
              <th className="text-left">PAYMENT</th>
              <th className="text-right pe-5">ACTIONS</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {bookings.map((item) => (
              <tr
                key={item._id}
                className="border-t border-base-200 hover:bg-base-50 transition"
              >
                <td className="py-4 px-6 font-medium text-gray-900">
                  {item.bookingId}
                </td>

                <td className="py-4 px-6">
                  <div>
                    <p className="font-semibold">{item.userEmail}</p>
                    <p className="text-sm text-base-content/60">
                      {item.userName}
                    </p>
                  </div>
                </td>

                <td className="py-4 px-6">{item.service_name}</td>

                <td className="py-4 px-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CalendarDays size={16} />
                    {item.serviceDate}
                  </div>
                </td>

                {/* STATUS BADGE */}
                <td className="py-4 px-6">
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                    {item.status}
                  </span>
                </td>

                {/* PAYMENT BADGE */}
                <td className="py-4 px-6">
                  <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600 font-medium">
                    {item.paymentStatus}
                  </span>
                </td>

                <td className="py-4 px-6 text-right">
                  <button
                    onClick={() => {
                      setBooking(item._id);
                      setOpenAddModal(true);
                    }}
                    className="btn btn-ghost btn-sm"
                  >
                    <UserRoundSearchIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-base-200 text-sm">
          <p className="text-base-content/60">Showing 3 of 3 entries</p>

          <div className="flex items-center gap-2">
            <button className="btn btn-xs btn-ghost">&lt;</button>

            <button className="btn btn-xs bg-[#8E6CE4] text-white rounded-md">
              1
            </button>
            <button className="btn btn-xs btn-ghost">2</button>
            <span>…</span>
            <button className="btn btn-xs btn-ghost">5</button>

            <button className="btn btn-xs btn-ghost">&gt;</button>
          </div>
        </div>
      </div>
      <AssignedModal
        isOpen={openAddModal}
        setIsOpen={setOpenAddModal}
        onSubmit={(data) => {
          axiosSecure.patch(`/booking-assigned/${booking}`, data).then(() => {
            toast.success("Booking assigned to decorator");
            refetch();
            setOpenAddModal(false);
          });
        }}
      />
    </div>
  );
};

export default Bookings;
