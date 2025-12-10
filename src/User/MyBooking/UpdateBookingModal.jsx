import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const UpdateBookingModal = ({
  booking,
  isOpen,
  setIsOpen,
  bookingsRefetch,
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      serviceDate: booking?.serviceDate,
      location: booking?.location,
      notes: booking?.notes || "",
    },
  });

  useEffect(() => {
    if (booking) {
      reset({
        serviceDate: booking.serviceDate,
        location: booking.location,
        notes: booking.notes || "",
      });
    }
  }, [booking, reset]);

  const handleUpdateBooking = (data) => {
    axiosSecure.patch(`/booking/${booking._id}`, data).then(() => {
      bookingsRefetch();
      setIsOpen(false);
      toast.success("booking info update success");
    });
  };

  if (!isOpen || !booking) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-1">Update Booking</h2>
        <p className="text-base-content/60 mb-6">
          Modify your booking details below.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(handleUpdateBooking)}
          className="space-y-5"
        >
          {/* EVENT DATE */}
          <div>
            <label className="font-medium">Event Date</label>
            <input
              readOnly={booking.paymentStatus === "paid" && true}
              type="date"
              {...register("serviceDate")}
              className={`input input-bordered w-full rounded-xl h-12 mt-1 ${
                booking.paymentStatus === "paid" && "cursor-not-allowed"
              }`}
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="font-medium">Event Location</label>
            <input
              type="text"
              readOnly={booking.paymentStatus === "paid" && true}
              {...register("location")}
              placeholder="Event venue / address"
              className={`input input-bordered w-full rounded-xl h-12 mt-1 ${
                booking.paymentStatus === "paid" && "cursor-not-allowed"
              }`}
            />
          </div>

          {/* ADDITIONAL NOTES */}
          <div>
            <label className="font-medium">Special Notes (Optional)</label>
            <textarea
              {...register("notes")}
              rows="3"
              placeholder="Any special requests or instructions…"
              className="textarea textarea-bordered w-full rounded-xl mt-1"
            ></textarea>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn rounded-xl text-white border-0 px-6"
              style={{ background: "#8E6CE4" }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookingModal;
