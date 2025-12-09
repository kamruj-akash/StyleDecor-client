import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import Loading from "../../Components/common/Loading";
import useAuth from "../../hooks/useAuth";
import { axiosClient } from "../../hooks/useAxios";
import BookingModal from "./BookingModal";

const ServiceDetails = () => {
  const [serviceDate, setServiceDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { id: serviceId } = useParams();
  const { data: service, isLoading } = useQuery({
    queryKey: ["service", serviceId],
    queryFn: async () => {
      const { data } = await axiosClient(`/service/${serviceId}`);
      return data;
    },
  });
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    category,
    cost,
    description,
    duration_estimate,
    service_name,
    service_type,
    thumbnail,
    unit,
    _id,
  } = service || {};

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="bg-gray-50 min-h-screen px-6 py-10">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Banner Image */}
          <div className="w-full h-80 rounded-3xl overflow-hidden">
            <img
              src={thumbnail}
              alt="Wedding Ceremony Decor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Breadcrumb */}
          <p className="text-sm text-gray-400">
            Home &gt; Services &gt; {service_name}
          </p>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title */}
              <div>
                <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-medium">
                  {category}
                </span>

                <h1 className="text-3xl font-bold text-gray-900 mt-3">
                  {service_name} |
                </h1>

                <p className="text-purple-600 text-xl font-semibold mt-2">
                  {cost} / {unit}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed">{description}</p>
            </div>

            {/* Booking Summary Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Booking Summary
              </h2>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="font-medium text-gray-900">
                    {service_name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-medium text-gray-900">{cost}</span>
                </div>
                <div className="flex justify-between">
                  <span>Unit:</span>
                  <span className="font-medium text-gray-900">{unit}</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-2">
                  Check Team Availability
                </p>
                <input
                  type="date"
                  onChange={(e) => {
                    setServiceDate(e.target.value);
                  }}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <button
                onClick={() => {
                  if (!serviceDate) {
                    return toast.error("please select a booking date!");
                  }
                  if (!user) {
                    return navigate("/login");
                  }
                  setIsOpen(true);
                }}
                className="btn mt-6 w-full bg-purple-500 hover:bg-purple-600 text-white py-2.5 rounded-full font-medium transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        serviceDate={serviceDate}
        serviceId={_id}
        service_name={service_name}
        cost={cost}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  );
};

export default ServiceDetails;
