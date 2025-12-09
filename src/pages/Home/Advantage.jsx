import { Clock, Lock, ShieldCheck } from "lucide-react";
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Smart Scheduling",
      description:
        "Book and manage your appointments with ease through our intelligent online platform.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Professionals",
      description:
        "Every decorator on our platform is vetted for quality, experience, and professionalism.",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description:
        "Your payments are processed securely, with protection for every transaction.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-20">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">
        The StyleDecor Advantage
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((item, index) => (
          <AdvantageCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Advantage;
