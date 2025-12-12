import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../Components/common/Loading";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const AddDecoratorModal = ({ isOpen, setIsOpen, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const [selectedUser, setSelectedUser] = useState(null);

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users?role=user`);
      return data;
    },
    enabled: isOpen,
  });

  const handleUserSelect = (userId) => {
    const found = users.find((u) => u._id === userId);
    setSelectedUser(found);
  };

  if (!isOpen) {
    return null;
  }

  if (isLoading) return <Loading />;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-6 lg:p-8 relative">
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-1">Add New Decorator</h2>
        <p className="text-base-content/60 mb-6">
          Select a user and assign decorator permissions.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* USER SELECT */}
          <div>
            <label className="font-medium">Select User</label>
            <select
              {...register("userId")}
              onChange={(e) => handleUserSelect(e.target.value)}
              className="select select-bordered w-full rounded-xl h-12 mt-1"
            >
              <option value="">Choose a user</option>
              {users.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.displayName} — {item.email}
                </option>
              ))}
            </select>
          </div>

          {/* USER INFO PREVIEW */}
          {selectedUser && (
            <div className="bg-base-100 border border-base-200 rounded-xl p-4 mt-2 space-y-4">
              {/* PHOTO + NAME */}
              <div className="flex items-center gap-4">
                <img
                  src={selectedUser.photoURL}
                  className="w-14 h-14 rounded-full shadow"
                />
                <div>
                  <p className="font-semibold text-lg">
                    {selectedUser.displayName}
                  </p>
                  <p className="text-base-content/60 text-sm">
                    {selectedUser.email}
                  </p>
                </div>
              </div>

              {/* DETAILS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-xs text-base-content/50">Role</p>
                  <p className="font-medium">{selectedUser.role}</p>
                </div>

                <div>
                  <p className="text-xs text-base-content/50">User Since</p>
                  <p className="font-medium">
                    {new Date(selectedUser.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SUBMIT BUTTON */}
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
              Add Decorator
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDecoratorModal;
