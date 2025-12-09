import { Star } from "lucide-react";

const DecoratorCard = ({ image, name, specialty, rating }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition cursor-pointer text-center">
      {/* Avatar */}
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto object-cover mb-6"
      />

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

      {/* Specialty */}
      <p className="text-gray-500 mt-1">{specialty}</p>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mt-4 text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            fill={index < Math.floor(rating) ? "#facc15" : "none"}
            stroke="#facc15"
          />
        ))}
        <span className="text-gray-600 ml-1">({rating})</span>
      </div>
    </div>
  );
};

export default DecoratorCard;
