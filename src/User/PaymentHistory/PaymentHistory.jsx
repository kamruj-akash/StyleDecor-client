import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/common/Loading";
import useAuth from "../../hooks/useAuth";
import { axiosSecure } from "../../hooks/useAxiosSecure";

/* =========================
   DATE FORMATTER FUNCTION
========================= */
const formatDate = (isoString) => {
  const date = new Date(isoString);

  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const PaymentHistory = () => {
  const { user } = useAuth();

  const badgeColors = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700",
    Refunded: "bg-blue-100 text-blue-700",
  };

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure("/payments");
      return data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="w-full p-6 lg:p-10">
      {/* PAGE HEADER */}
      <h1 className="text-3xl font-bold">Payment History</h1>
      <p className="text-base-content/60 mb-8">
        Track all your past payments for decoration services.
      </p>

      {/* TABLE CONTAINER */}
      <div className="bg-white rounded-2xl border border-base-200 shadow-sm overflow-hidden">
        <table className="table-auto w-full">
          {/* TABLE HEADER */}
          <thead className="bg-[#F7F7FB] text-sm font-semibold text-base-content/60 w-full">
            <tr>
              <th className="py-4 px-6 text-left">TRANSACTION ID</th>
              <th className="text-left">DATE</th>
              <th className="text-left">AMOUNT</th>
              <th className="text-left"></th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {payments.map((item) => (
              <tr
                key={item._id}
                className="border-t border-base-200 hover:bg-base-50 transition"
              >
                {/* ID */}
                <td className="py-5 px-6 font-medium text-[#8363D8]">
                  #{item.transactionId}
                </td>

                {/* DATE */}
                <td className="text-base-content/70">
                  {formatDate(item.createdAt)}
                </td>

                {/* AMOUNT */}
                <td className="font-medium">${item.cost}</td>

                {/* STATUS */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      badgeColors[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
