const DecoratorCard = ({ image, name, email }) => {
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

      {/* email */}
      <p className="text-gray-500 mt-1">{email}</p>
    </div>
  );
};

export default DecoratorCard;
