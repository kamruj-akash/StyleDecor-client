import DecoratorCard from "./DecoratorCard";

const Decorators = () => {
  const decorators = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/706/706816.png",
      name: "Olivia Chen",
      specialty: "Modern & Minimalist",
      rating: 4.9,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
      name: "Benjamin Carter",
      specialty: "Event & Ceremonial",
      rating: 4.8,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/706/706807.png",
      name: "Liam Rodriguez",
      specialty: "Smart Home Integration",
      rating: 5.0,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">
        Meet Our Top-Rated Decorators
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {decorators.map((item, index) => (
          <DecoratorCard
            key={index}
            image={item.image}
            name={item.name}
            specialty={item.specialty}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Decorators;
