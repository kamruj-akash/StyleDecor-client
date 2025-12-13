import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../hooks/useAxios";
import DecoratorCard from "./DecoratorCard";

const Decorators = () => {
  const { data: decorators = [] } = useQuery({
    queryKey: ["decorators"],
    queryFn: async () => {
      const { data } = await axiosClient("/getDecorator");
      return data;
    },
  });
  console.log(decorators);
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">
        Meet Our Top-Rated Decorators
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {decorators.map((item) => (
          <DecoratorCard
            key={item._id}
            image={item.photoURL}
            name={item.displayName}
            email={item.email}
          />
        ))}
      </div>
    </section>
  );
};

export default Decorators;
