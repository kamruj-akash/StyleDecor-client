import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { axiosClient } from "../../hooks/useAxios";

const BookingModal = ({
  isOpen,
  setIsOpen,
  serviceId,
  serviceDate,
  service_name,
  cost,
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBookService = () => {
    const bookService = {
      serviceId,
      serviceDate,
      service_name,
      cost,
      userName: user.displayName,
      userEmail: user.email,
    };
    axiosClient.post("/new-booking", bookService).then(() => {
      toast.success("Booking Success, please Pay Now");
      navigate("/dashboard/user/bookings");
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 animate-scaleIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Confirm Booking
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-xl">service Name: {service_name}</p>
        <p className="text-gray-500 text-sm">Cost: {cost}</p>
        <p className="text-gray-500 text-sm">Date: {cost}</p>
        <p className="text-gray-500 text-sm">At: {serviceDate}</p>
        <p className="text-gray-500 text-sm"> Name: {user.displayName}</p>
        <p className="text-gray-500 text-sm"> Email: {user.email}</p>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="btn px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleBookService}
            className="btn px-5 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
