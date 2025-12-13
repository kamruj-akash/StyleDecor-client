import { useQuery } from "@tanstack/react-query";
import { Briefcase, CreditCard, Workflow } from "lucide-react";
import Loading from "../../Components/common/Loading";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const DecoratorDashboard = () => {
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data } = await axiosSecure("/bookings");
      return data;
    },
  });

  const assignedProjects = bookings.filter((b) => b.status !== "Completed");

  const completedProjects = bookings.filter((b) => b.status === "Completed");

  const totalEarn = completedProjects?.reduce(
    (total, booking) => total + Number(booking.cost),
    0
  );

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 lg:p-10 space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Decorator Dashboard
        </h1>
        <p className="text-base-content/60">
          Manage your assigned projects and track your work progress.
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* ASSIGNED PROJECTS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">Assigned Projects</p>
              <h2 className="text-3xl font-bold text-gray-900">
                {assignedProjects?.length}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Briefcase className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* COMPLETED PROJECTS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">Completed Projects</p>
              <h2 className="text-3xl font-bold text-gray-900">
                {completedProjects.length}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Workflow className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL EARNINGS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-base-content/60">Total Earnings</p>
              <h2 className="text-3xl font-bold text-gray-900">
                ৳ {(totalEarn * 60) / 100}
              </h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <CreditCard className="text-purple-600" size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecoratorDashboard;
