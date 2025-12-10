import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../hooks/useAxios";
import ServiceCard from "../Services/ServiceCard";

const Services = () => {
  const { data: allServices } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data } = await axiosClient("/services");
      return data;
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">
        Our Decoration Services
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {allServices?.map((service) => (
          <ServiceCard
            key={service._id}
            id={service._id}
            image={service.thumbnail}
            title={service.service_name}
            price={service.cost}
            description={service.description}
            tag={service.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
