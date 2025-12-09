import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const { logoutUser, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        // if (user?.accessToken) {
        //   config.headers.Authorization = `Bearer ${user.accessToken}`;
        // }
        return config;
      },
      (error) => Promise.reject(error)
    );

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
          await logoutUser();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, [logoutUser, navigate, user]);

  return axiosSecure;
};

export default useAxiosSecure;
