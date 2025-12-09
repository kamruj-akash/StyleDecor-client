import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const ServiceCard = ({ image, title, price }) => {
  const { user } = useAuth();
  // if (!user) return <Navigate to={"/login"} />;

  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 mt-1">From {price}</p>

      {/* Link */}
      {/* <button className="mt-2 text-purple-600 font-medium hover:underline transition">
        View Details
      </button> */}
    </div>
  );
};

export default ServiceCard;
