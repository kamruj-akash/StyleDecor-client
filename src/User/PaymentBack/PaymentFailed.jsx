import { XCircle } from "lucide-react";
import { Link } from "react-router";

const PaymentFailed = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FC] flex flex-col items-center px-4 py-10">
      {/* MAIN CARD */}
      <div className="bg-white rounded-3xl shadow-md p-8 lg:p-12 w-full max-w-3xl mt-4">
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <XCircle className="text-red-600" size={40} />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-2 text-red-600">
          Payment Failed
        </h1>

        <p className="text-center text-gray-500 max-w-lg mx-auto mb-8">
          Unfortunately, your payment could not be processed. Please review the
          details below and try again.
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-10 w-full max-w-2xl">
        <Link
          to="/dashboard/user/bookings"
          className="w-full py-3 text-center rounded-full text-white font-semibold"
          style={{ background: "#8E6CE4" }}
        >
          Try Again
        </Link>

        <Link
          to="/"
          className="w-full py-3 text-center rounded-full bg-white border border-gray-300 font-semibold text-gray-700"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
