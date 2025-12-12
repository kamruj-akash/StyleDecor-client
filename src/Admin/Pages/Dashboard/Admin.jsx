import {
  BarChart3,
  CalendarDays,
  CreditCard,
  Paintbrush,
  Users,
} from "lucide-react";

const Admin = () => {
  return (
    <div className="p-6 lg:p-10 space-y-10">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-base-content/60 text-sm">
          Overview of platform activity and performance metrics.
        </p>
      </div>

      {/* TOP GRID CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* TOTAL USERS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base-content/60 text-sm">Total Users</p>
              <h2 className="text-3xl font-bold text-gray-900">1,245</h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Users className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL BOOKINGS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base-content/60 text-sm">Total Bookings</p>
              <h2 className="text-3xl font-bold text-gray-900">820</h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <CalendarDays className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL REVENUE */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base-content/60 text-sm">Total Revenue</p>
              <h2 className="text-3xl font-bold text-gray-900">৳ 4,32,500</h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <CreditCard className="text-purple-600" size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL DECORATORS */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base-content/60 text-sm">Total Decorators</p>
              <h2 className="text-3xl font-bold text-gray-900">37</h2>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Paintbrush className="text-purple-600" size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* TODAY’S BOOKINGS */}
      <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Today's Bookings
          </h2>
          <span className="text-sm text-base-content/50">Mon, Jan 10 2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
            <p className="text-base-content/60 text-sm">Pending</p>
            <h3 className="text-2xl font-bold mt-1 text-purple-700">12</h3>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
            <p className="text-base-content/60 text-sm">In Progress</p>
            <h3 className="text-2xl font-bold mt-1 text-purple-700">5</h3>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
            <p className="text-base-content/60 text-sm">Completed</p>
            <h3 className="text-2xl font-bold mt-1 text-purple-700">8</h3>
          </div>
        </div>
      </div>

      {/* CHARTS PREVIEW */}
      <div className="bg-white rounded-2xl shadow-md border border-base-200 p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Analytics Preview
          </h2>
          <BarChart3 className="text-purple-600" size={26} />
        </div>

        <div className="h-64 flex items-center justify-center text-base-content/50">
          <p>
            Charts will appear here (Revenue, Service Demand, Bookings
            Histogram)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
