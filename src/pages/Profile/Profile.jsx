import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../Components/common/Loading";
import useAuth from "../../hooks/useAuth";
import { axiosClient } from "../../hooks/useAxios";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const Profile = () => {
  const { user: userKey } = useAuth();

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", userKey.email],
    queryFn: async () => {
      const { data } = await axiosSecure("/users/me");
      return data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        displayName: user.displayName,
      });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    const userPhoto = data.photo[0];
    const formData = new FormData();
    formData.append("image", userPhoto);
    const image_API_URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_ImageBB_API
    }`;
    if (!userPhoto) {
      axiosSecure
        .patch("/update-user", { displayName: data.displayName })
        .then(() => {
          toast.success("User info update success!");
          return refetch();
        });
    } else {
      axiosClient.post(image_API_URL, formData).then((res) => {
        const photoURL = res.data.data.url;
        const updatedUserInfo = { photoURL, displayName: data.displayName };
        axiosSecure.patch("/update-user", updatedUserInfo).then(() => {
          toast.success("User info update success!");
          return refetch();
        });
      });
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="w-full p-6 lg:p-10">
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-2">My Profile</h1>
      <p className="text-base-content/60 mb-8">
        Manage your personal information.
      </p>

      {/* CARD */}
      <div className="bg-white shadow-sm border border-base-200 rounded-2xl p-8 max-w-3xl">
        {/* PHOTO + NAME */}
        <div className="flex flex-col items-center mb-10">
          <img
            referrerPolicy="no-referrer"
            src={user?.photoURL}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover shadow-sm border"
          />

          <label className="mt-3 cursor-pointer text-purple-600 font-medium hover:underline">
            Change Photo
            <input type="file" {...register("photo")} className="hidden" />
          </label>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* FULL NAME */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              {...register("displayName")}
              className="input input-bordered rounded-xl w-full h-12 mt-1"
            />
          </div>

          {/* READONLY FIELDS */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <p className="input input-bordered rounded-xl w-full h-12 mt-1 bg-base-200 flex items-center">
              {user?.email}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">Role</label>
            <p className="input input-bordered rounded-xl w-full h-12 mt-1 bg-base-200 flex items-center">
              {user?.role}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">Member Since</label>
            <p className="input input-bordered rounded-xl w-full h-12 mt-1 bg-base-200 flex items-center">
              {user?.createdAt
                ? new Date(user.createdAt)
                    .toLocaleString("en-GB", {
                      weekday: "long",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })
                    .replace(",", "")
                    .replace(" PM", "PM")
                    .replace(" AM", "AM")
                : ""}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end pt-4">
            <button
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

export default Profile;
