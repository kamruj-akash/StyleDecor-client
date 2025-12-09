import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Signup = () => {
  const { googleLogin, registerUser, updateProfileInfo } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const axiosClient = useAxios();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegisterUser = (data) => {
    const userPhoto = data.photo[0];
    const formData = new FormData();
    formData.append("image", userPhoto);
    const image_API_URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_ImageBB_API
    }`;

    axios.post(image_API_URL, formData).then((res) => {
      const photoUrl = res.data.data.url;
      const userInfo = {
        email: data.email,
        displayName: data.name,
        photoURL: photoUrl,
      };
      axiosClient.post("/user", userInfo).then(() => {
        registerUser(data.email, data.password).then(() => {
          const userProfile = {
            displayName: data.name,
            photoURL: photoUrl,
          };
          updateProfileInfo(userProfile).then(() => {
            navigate("/");
          });
        });
      });
    });

    // registerUser(data.email, data.password).then(() => {});
  };

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      const userInfo = {
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      };
      axiosClient.post("/user", userInfo).then(() => {
        navigate("/");
      });
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-base-100">
      {/* Left SIDE IMAGE */}
      <div className="hidden lg:block">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg"
          alt="Decor"
          className="w-full h-full object-cover"
        />
      </div>
      {/* RIGHT FORM */}
      <div className="flex items-center justify-center px-6 md:px-14 lg:px-20">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-3 text-center lg:text-left">
            Create Account
          </h1>
          <p className="text-base-content/70 mb-10 text-center lg:text-left">
            Sign up to start booking premium StyleDecor services.
          </p>

          <form onSubmit={handleSubmit(handleRegisterUser)}>
            {/* Full Name */}
            <div className="mb-5">
              <label className="font-medium">
                Full Name{" "}
                {errors.name && (
                  <span className="text-xs text-red-600">is required</span>
                )}
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full mt-1 rounded-xl h-12 focus:outline-none"
              />
            </div>

            {/* Photo URL */}
            <div className="mb-5">
              <label className="font-medium">
                Photo URL{" "}
                {errors.photo && (
                  <span className="text-xs text-red-600">is required</span>
                )}
              </label>
              <input
                {...register("photo", { required: true })}
                type="file"
                className="input input-bordered w-full mt-1 rounded-xl p-2 focus:outline-none cursor-pointer"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="font-medium">
                Email{" "}
                {errors.email && (
                  <span className="text-xs text-red-600">is required</span>
                )}
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1 rounded-xl h-12 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="font-medium">
                Password{" "}
                {errors.password && (
                  <span className="text-xs text-red-600">is required</span>
                )}
              </label>

              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full mt-1 rounded-xl h-12 focus:outline-none pr-12"
                />

                {/* Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-4 text-gray-500 z-20 cursor-pointer"
                >
                  {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              className="btn w-full h-12 rounded-xl mt-2 text-white border-0 "
              style={{ background: "#8E6CE4" }}
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-base-300"></div>
            <span className="text-base-content/70">Or continue with</span>
            <div className="h-px flex-1 bg-base-300"></div>
          </div>

          {/* Social Buttons */}

          <button
            onClick={handleGoogleLogin}
            className="btn w-full h-12 rounded-xl bg-white border border-base-300 hover:bg-base-200 flex gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
              className="w-5"
            />{" "}
            Google
          </button>
          {/* Login Redirect */}
          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-medium cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
