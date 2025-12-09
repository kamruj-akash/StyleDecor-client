import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const BookingModal = ({
  isOpen,
  setIsOpen,
  serviceId,
  serviceDate,
  service_name,
  service_type,
  category,
  cost,
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleBookService = async () => {
    if (!location) return toast.error("Please enter service location!");

    const bookingData = {
      serviceId,
      service_name,
      category,
      service_type,

      serviceDate,
      location,
      notes,

      cost,

      userName: user.displayName,
      userEmail: user.email,

      paymentStatus: "unpaid",
      status: "Payment Pending",
      serviceStatus: "Pending",
      assignedDecoratorId: null,
    };

    try {
      await axiosSecure.post("/new-booking", bookingData);
      toast.success("Booking successful! Please proceed to payment.");
      navigate("/dashboard/user/bookings");
    } catch {
      toast.error("Booking failed.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 animate-scaleIn">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Confirm Booking
        </h2>

        <div className="text-gray-600 space-y-1 mb-4">
          <p>Service: {service_name}</p>
          <p>Cost: {cost} BDT</p>
          <p>Date: {serviceDate}</p>
          <p>Type: {service_type}</p>
          <p>User: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>

        {/* Location Input */}
        <input
          type="text"
          placeholder="Enter service location"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-3"
        />

        {/* Notes Input */}
        <textarea
          placeholder="Add notes (optional)"
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="btn px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleBookService}
            className="btn px-5 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
