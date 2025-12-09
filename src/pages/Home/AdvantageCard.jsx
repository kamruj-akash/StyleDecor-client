
const AdvantageCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
        <Icon className="text-purple-600" size={28} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 mt-3 leading-relaxed">{description}</p>
    </div>
  );
};

export default AdvantageCard;
