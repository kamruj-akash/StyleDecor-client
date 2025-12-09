import { useQuery } from "@tanstack/react-query";
import { Edit, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxios from "../../../hooks/useAxios";
import { axiosSecure } from "../../../hooks/useAxiosSecure";

const ServicesList = () => {
  const [openModal, setOpenModal] = useState(false);
  const axiosClient = useAxios();
  const { data: services, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosClient("/services");
      return res.data;
    },
  });

  const { handleSubmit, register } = useForm();

  const handleAddService = (data) => {
    const userPhoto = data.photo[0];
    const formData = new FormData();
    formData.append("image", userPhoto);
    const image_API_URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_ImageBB_API
    }`;
    axiosClient.post(image_API_URL, formData).then((res) => {
      const photoUrl = res.data.data.url;
      delete data.photo;
      const newService = { ...data, thumbnail: photoUrl };
      axiosSecure.post("/service", newService).then(() => {
        toast.success("Service Added Success!!");
        setOpenModal(false);
        refetch();
      });
    });
  };

  const handleEditService = (id) => {};

  const handleDeleteService = async (id) => {
    try {
      await axiosSecure.delete(`/service/${id}`);
      toast.success("Service deleted successfully!");
      refetch();
    } catch (error) {
      toast.error("Failed to delete service!");
      console.error(error);
    }
  };

  return (
    <>
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
            onClick={() => setOpenModal(true)}
            className="btn bg-[#8E6CE4] hover:bg-[#7d5bd6] text-white rounded-xl px-5"
          >
            <Plus size={18} /> Add Decorator
          </button>
        </div>
        {/* TABLE CONTAINER */}
        <div className="bg-white shadow-sm rounded-2xl border border-base-200 overflow-hidden">
          {/* HEADER */}
          <div className="grid grid-cols-12 px-6 py-4 text-sm font-semibold text-base-content/70 bg-[#F7F7FB]">
            <div className="col-span-4">SERVICE NAME</div>
            <div className="col-span-3">CATEGORY</div>
            <div className="col-span-2">COST</div>
            <div className="col-span-1">UNIT</div>
            <div className="col-span-1">STATUS</div>
            <div className="col-span-1 text-right">ACTIONS</div>
          </div>

          {/* ROWS */}
          {services?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 px-6 py-5 items-center border-t border-base-200 hover:bg-base-50 transition"
            >
              {/* Name */}
              <div className="col-span-4 font-medium">{item.service_name}</div>

              {/* Category */}
              <div className="col-span-3 text-base-content/60">
                {item.category}
              </div>

              {/* Cost */}
              <div className="col-span-2 font-medium">{item.cost}</div>

              {/* Unit */}
              <div className="col-span-1 text-base-content/60">{item.unit}</div>

              {/* Status Badge */}
              <div className="col-span-1">
                {item.available === true ? (
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600 flex items-center gap-1 w-fit">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Active
                  </span>
                ) : (
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-600 flex items-center gap-1 w-fit">
                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                    Inactive
                  </span>
                )}
              </div>

              {/* ACTIONS */}
              <div className="col-span-1 flex justify-end items-center gap-3">
                <button
                  onClick={() => handleEditService(item._id)}
                  className="text-gray-500 hover:text-primary transition"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDeleteService(item._id)}
                  className="text-gray-500 hover:text-red-500 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  add service modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 lg:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-1">Add New Service</h2>
            <p className="text-base-content/60 mb-6">
              Fill in the required fields to create a new decoration service.
            </p>

            <form
              onSubmit={handleSubmit(handleAddService)}
              className="space-y-5"
            >
              {/* SERVICE NAME */}
              <div>
                <label className="font-medium">Service Name</label>
                <input
                  {...register("service_name")}
                  type="text"
                  placeholder="Premium Wedding Stage Decoration"
                  className="input input-bordered w-full rounded-xl h-12 mt-1"
                />
              </div>

              {/* CATEGORY + SERVICE TYPE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Category</label>
                  <select
                    {...register("category")}
                    className="select select-bordered w-full rounded-xl h-12 mt-1"
                  >
                    <option value="wedding">Wedding</option>
                    <option value="floral">Floral Arrangements</option>
                    <option value="lighting">Lighting</option>
                    <option value="furniture">Furniture</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium">Service Type</label>
                  <select
                    {...register("service_type")}
                    className="select select-bordered w-full rounded-xl h-12 mt-1"
                  >
                    <option value="on-site">On-site</option>
                    <option value="in-studio">In-Studio Consultation</option>
                  </select>
                </div>
              </div>

              {/* COST + UNIT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Cost (BDT)</label>
                  <input
                    {...register("cost")}
                    type="number"
                    placeholder="15000"
                    className="input input-bordered w-full rounded-xl h-12 mt-1"
                  />
                </div>
                <div>
                  <label className="font-medium">Unit</label>
                  <input
                    {...register("unit")}
                    type="text"
                    placeholder="per event"
                    className="input input-bordered w-full rounded-xl h-12 mt-1"
                  />
                </div>
              </div>

              {/* THUMBNAIL URL */}
              <div>
                <label className="font-medium">Thumbnail URL</label>
                <input
                  {...register("photo", { required: true })}
                  type="file"
                  placeholder="https://i.ibb.co/wedding-thumbnail.jpg"
                  className="input input-bordered w-full mt-1 rounded-xl p-2 focus:outline-none cursor-pointer"
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="font-medium">Description</label>
                <textarea
                  {...register("description")}
                  rows="4"
                  placeholder="A premium wedding stage decoration including floral backdrop, LED lighting, drapes, and full event coordination."
                  className="textarea textarea-bordered w-full rounded-xl mt-1"
                ></textarea>
              </div>

              {/* DURATION ESTIMATE */}
              <div>
                <label className="font-medium">Duration Estimate</label>
                <input
                  {...register("duration_estimate")}
                  type="text"
                  placeholder="5–7 hours"
                  className="input input-bordered w-full rounded-xl h-12 mt-1"
                />
              </div>

              {/* AVAILABLE STATUS */}
              <div>
                <label className="font-medium">Availability</label>
                <select
                  {...register("available", {
                    setValueAs: (v) => v === "true",
                  })}
                  className="select select-bordered w-full rounded-xl h-12 mt-1"
                >
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </select>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="btn btn-ghost rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn rounded-xl text-white border-0 px-6"
                  style={{ background: "#8E6CE4" }}
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesList;
