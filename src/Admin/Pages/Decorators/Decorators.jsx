import { useQuery } from "@tanstack/react-query";
import {
  BadgeCheck,
  Briefcase,
  MoreHorizontal,
  Plus,
  Star,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import AddDecoratorModal from "./AddDecoratorModal";

const Decorators = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const {
    data: decorators = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["decorators"],
    queryFn: async () => {
      const { data } = await axiosSecure("/decorators");
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-lg"></span>
      </div>
    );

  return (
    <div className="w-full p-6 lg:p-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Decorators</h1>
          <p className="text-base-content/60">
            Manage and organize all decorators on the platform.
          </p>
        </div>

        <button
          onClick={() => setOpenAddModal(true)}
          className="btn bg-[#8E6CE4] text-white rounded-xl px-5"
        >
          <Plus size={18} /> Add Decorator
        </button>
      </div>
      {/* TABLE WRAPPER */}
      <div className="bg-base-100 rounded-2xl shadow-sm border border-base-200 overflow-hidden">
        <table className="table-auto w-full">
          {/* THEAD */}
          <thead className="bg-base-50 text-sm p-5 font-semibold text-base-content/70">
            <tr>
              <th className="py-4 px-6 text-left ps-5">Name</th>
              <th className="text-left">COMPLETED</th>
              <th className="text-left">RATING</th>
              <th className="text-left">STATUS</th>
              <th className="text-right pe-5">ACTIONS</th>
            </tr>
          </thead>

          {/* TBODY */}
          <tbody>
            {decorators.map((item) => (
              <tr
                key={item._id}
                className="border-t border-base-200 hover:bg-base-50 transition"
              >
                {/* DECORATOR INFO */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.photoURL}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{item.displayName}</p>
                      <p className="text-sm text-base-content/60">
                        {item.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* COMPLETED PROJECTS */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-1 text-gray-700">
                    <Briefcase size={16} />
                    {item.completedCount || 0}
                  </div>
                </td>

                {/* RATING */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-yellow-400" />
                    <span className="font-medium">{item.rating || "—"}</span>
                  </div>
                </td>

                {/* ACCOUNT STATUS */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    {item.status === "available" ? (
                      <span className="text-green-600 flex items-center gap-1 text-sm">
                        <BadgeCheck size={16} /> Active
                      </span>
                    ) : (
                      <span className="text-red-500 text-sm">Working</span>
                    )}
                  </div>
                </td>

                {/* ACTIONS */}
                <td className="py-4 px-6 text-right">
                  <button className="btn btn-ghost btn-sm" title="More options">
                    <MoreHorizontal />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-base-200 text-sm">
          <p className="text-base-content/60">
            Showing {decorators.length} entries
          </p>

          {/* PAGINATION */}
          <div className="flex items-center gap-2">
            <button className="btn btn-xs btn-ghost">&lt;</button>

            <button className="btn btn-xs bg-[#8E6CE4] text-white rounded-md">
              1
            </button>
            <button className="btn btn-xs btn-ghost">2</button>
            <button className="btn btn-xs btn-ghost">3</button>
            <span>…</span>
            <button className="btn btn-xs btn-ghost">8</button>

            <button className="btn btn-xs btn-ghost">&gt;</button>
          </div>
        </div>
      </div>
      <AddDecoratorModal
        isOpen={openAddModal}
        setIsOpen={setOpenAddModal}
        onSubmit={(data) => {
          setOpenAddModal(false);
          if (!data.userId) return;
          axiosSecure.patch("/add-decorator", data).then(() => {
            refetch();
            toast.success("New Decorator Added success!");
          });
        }}
      />
    </div>
  );
};

export default Decorators;
