import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Login = () => {
  const axiosClient = useAxios();
  const [showPass, setShowPass] = useState(false);
  const { googleLogin, emailLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    emailLogin(email, password)
      .then((data) => {
        toast.success("Login Success");
        const userEmail = { email: data.user.email };
        navigate(location.state || "/");
        axiosClient.patch("/user/login", userEmail);
      })
      .catch(() => toast.error("login failed"));
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
      <div className="flex items-center justify-center px-6 md:px-14 lg:px-20">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-3 text-center lg:text-left">
            Welcome Back
          </h1>
          <p className="text-base-content/70 mb-10 text-center lg:text-left">
            Log in to access your StyleDecor account.
          </p>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-5">
              <label className="font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1 rounded-xl h-12 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <div className="flex justify-between">
                <label className="font-medium">Password</label>
                <Link className="text-primary text-sm font-medium cursor-pointer">
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  name="password"
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

            {/* Login Button */}
            <button
              className="btn w-full h-12 rounded-xl mt-2 text-white border-0"
              style={{ background: "#8E6CE4" }}
            >
              Login
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

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm">
            Don’t have an account?
            <Link
              to={"/sign-up"}
              className="text-primary font-medium cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg"
          alt="Decor"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
