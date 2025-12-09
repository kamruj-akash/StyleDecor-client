import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/common/Loading";
import { axiosClient } from "../../hooks/useAxios";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { data: allServices, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data } = await axiosClient("/services");
      return data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className=" bg-gray-50 px-6 py-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
        <p className="text-gray-500 mt-1">
          Choose the perfect decoration package for your special event
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  );
};

export default Services;
