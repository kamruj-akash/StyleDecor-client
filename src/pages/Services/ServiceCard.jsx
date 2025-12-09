import { Link } from "react-router";

const ServiceCard = ({ image, title, price, description, tag, id }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="h-56 w-full object-cover" />
        {tag && (
          <span className="absolute top-3 right-3 bg-white text-purple-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        <p className="text-purple-600 font-medium">
          Starting from <span className="font-bold">{price}</span> / event
        </p>

        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        <Link
          to={`/service/${id}`}
          className="w-full btn bg-purple-500 hover:bg-purple-600 text-white py-2.5 rounded-full font-medium transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
