import { useQuery } from "@tanstack/react-query";
import { CalendarDays, MapPin } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../Components/common/Loading";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import StatusModal from "./StatusModal";

const MyAssignedProjects = () => {
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const { data } = await axiosSecure("/bookings");
      return data;
    },
  });

  const assignedProjects = bookings.filter((b) => b.status !== "Completed");

  if (isLoading) return <Loading />;

  // Submit Updated Status
  const handleStatusUpdate = async (newStatus) => {
    if (!selectedBooking) {
      return toast.error("please select a status");
    }

    await axiosSecure
      .patch(`/booking/${selectedBooking._id}`, {
        status: newStatus,
      })
      .then(() => {
        setOpenStatusModal(false);
        refetch();
      })
      .catch(() => {});
  };

  return (
    <div className="p-6 lg:p-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        My Assigned Projects
      </h1>
      <p className="text-base-content/60 mb-8">
        View your assigned bookings and update service progress.
      </p>

      <div className="bg-white rounded-2xl shadow-sm border border-base-200 overflow-hidden">
        <table className="table-auto w-full">
          <thead className="bg-base-50 text-sm font-semibold text-base-content/70">
            <tr>
              <th className="py-4 px-6 text-left">BOOKING</th>
              <th className="text-left">SERVICE</th>
              <th className="text-left">DATE</th>
              <th className="text-left">LOCATION</th>
              <th className="text-left">STATUS</th>
              <th className="text-right">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {assignedProjects.map((item) => (
              <tr
                key={item._id}
                className="border-t border-base-200 hover:bg-base-50 transition"
              >
                <td className="py-4 px-6 font-medium text-gray-900">
                  {item.bookingId}
                  <p className="text-xs text-base-content/50">
                    {item.userEmail}
                  </p>
                </td>

                <td className="py-4 px-6">{item.service_name}</td>

                <td className="py-4 px-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CalendarDays size={16} />
                    {item.serviceDate}
                  </div>
                </td>

                <td className="py-4 px-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={16} />
                    {item.location}
                  </div>
                </td>

                <td className="py-4 px-6">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                    {item.status}
                  </span>
                </td>

                <td className="py-4 px-6 text-right">
                  <button
                    onClick={() => {
                      setSelectedBooking(item);
                      setOpenStatusModal(true);
                    }}
                    className="btn btn-sm bg-[#8E6CE4] text-white hover:bg-[#7c58d0] rounded-lg"
                  >
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* STATUS MODAL */}
      <StatusModal
        open={openStatusModal}
        setOpen={setOpenStatusModal}
        onSubmit={handleStatusUpdate}
      />
    </div>
  );
};

export default MyAssignedProjects;
