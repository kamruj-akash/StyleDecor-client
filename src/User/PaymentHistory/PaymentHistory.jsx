const PaymentHistory = () => {
  const payments = [
    {
      id: "TXN-99012",
      date: "October 26, 2024",
      amount: "$4,500.00",
      method: "Stripe",
      status: "Paid",
    },
    {
      id: "TXN-99044",
      date: "November 15, 2024",
      amount: "$6,200.00",
      method: "Stripe",
      status: "Pending",
    },
    {
      id: "TXN-99123",
      date: "December 02, 2024",
      amount: "$3,150.00",
      method: "Stripe",
      status: "Failed",
    },
    {
      id: "TXN-99188",
      date: "December 20, 2024",
      amount: "$2,800.00",
      method: "Stripe",
      status: "Refunded",
    },
    {
      id: "TXN-99201",
      date: "January 18, 2025",
      amount: "$1,900.00",
      method: "Stripe",
      status: "Paid",
    },
  ];

  const badgeColors = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700",
    Refunded: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="w-full p-6 lg:p-10">
      {/* PAGE HEADER */}
      <h1 className="text-3xl font-bold">Payment History</h1>
      <p className="text-base-content/60 mb-8">
        Track all your past payments for decoration services.
      </p>

      {/* FILTERS */}
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
              <th className="py-4 px-6 text-left">TRANSACTION ID</th>
              <th className="text-left">DATE</th>
              <th className="text-left">AMOUNT</th>
              <th className="text-left">METHOD</th>
              <th className="text-left">STATUS</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {payments.map((item, idx) => (
              <tr
                key={idx}
                className="border-t border-base-200 hover:bg-base-50 transition"
              >
                {/* ID */}
                <td className="py-5 px-6 font-medium text-[#8363D8]">
                  #{item.id}
                </td>

                {/* DATE */}
                <td className="text-base-content/70">{item.date}</td>

                {/* AMOUNT */}
                <td className="font-medium">{item.amount}</td>

                {/* METHOD */}
                <td className="text-base-content/70">{item.method}</td>

                {/* STATUS */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColors[item.status]}`}
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
