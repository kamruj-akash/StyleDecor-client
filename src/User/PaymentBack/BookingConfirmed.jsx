import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const BookingConfirmed = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [paymentInfo, setPaymentInfo] = useState({});
  const { service_name, transactionId, bookingId } = paymentInfo || {};

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .post(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            service_name: res.data.service_name,
            transactionId: res.data.transactionId,
            bookingId: res.data.bookingId,
          });
        });
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F8F7FC]">
      <div>
        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-md p-8 lg:p-12 w-full max-w-4xl">
          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-purple-600" size={40} />
            </div>
          </div>

          {/* HEADING */}
          <h1 className="text-3xl font-bold text-center ">
            Your Booking is Confirmed!
          </h1>
          <p className="text-center text-gray-500 max-w-xl mx-auto mb-8">
            Thank you for choosing StyleDecor. We’ve received your booking and
            are excited to bring your vision to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 border-t pt-8">
            {/* Service */}
            <div>
              <p className="text-sm text-gray-400">Service:</p>
              <p className="font-semibold">{service_name}</p>
            </div>

            {/* Date & Time */}
            <div>
              <p className="text-sm text-gray-400">Transaction Id:</p>
              <p className="font-semibold">{transactionId}</p>
            </div>

            {/* Location */}
            <div>
              <p className="text-sm text-gray-400">booking Id:</p>
              <p className="font-semibold">{bookingId}</p>
            </div>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex gap-4 mt-10 w-full max-w-3xl">
          <Link
            to="/dashboard/user/bookings"
            className="w-full py-3 text-center rounded-full text-white font-semibold"
            style={{ background: "#8E6CE4" }}
          >
            View My Bookings
          </Link>

          <Link
            to="/"
            className="w-full py-3 text-center rounded-full bg-white border border-gray-300 font-semibold text-gray-700"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
