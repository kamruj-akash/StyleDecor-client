import ServiceCard from "./ServiceCard";

const Services = () => {
  const allServices = [
    {
      image:
        "https://images.unsplash.com/photo-1598300056390-4c64a5471dbc?auto=format&fit=crop&w=800&q=80",
      title: "Smart Home Setup",
      price: "$499",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
      title: "Wedding Ceremony Decor",
      price: "$1299",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589816939624-3b43df65c0e5?auto=format&fit=crop&w=800&q=80",
      title: "Corporate Event Styling",
      price: "$999",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607083206968-55dabf0a37e0?auto=format&fit=crop&w=800&q=80",
      title: "Holiday Installations",
      price: "$799",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">
        Our Decoration Services
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {allServices.map((item) => (
          <ServiceCard
            key={item._id}
            image={item.thumbnail}
            title={item.service_name}
            price={item.cost}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
