import { CheckCircle, MapPin } from "lucide-react";

const ServiceCoverage = () => {
  return (
    <div className=" bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Service Coverage</h1>
          <p className="text-base-content/60 mt-3">
            We proudly offer decoration services across major cities in
            Bangladesh.
          </p>
        </div>

        {/* COVERAGE AREAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Dhaka",
            "Chattogram",
            "Sylhet",
            "Rajshahi",
            "Khulna",
            "Barishal",
          ].map((city, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-base-200 p-6 flex items-center gap-4"
            >
              <div className="bg-purple-100 p-3 rounded-xl">
                <MapPin className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{city}</h3>
                <p className="text-sm text-base-content/60">
                  On-site & in-studio services available
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MAP PLACEHOLDER */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-10 text-center">
          <h2 className="text-xl font-semibold mb-2">Coverage Map</h2>
          <p className="text-base-content/60 mb-6">
            Interactive service coverage map will be displayed here.
          </p>
          <div className="h-72 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 font-medium">
            Map Placeholder
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-white rounded-2xl shadow-md border border-base-200 p-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Why Choose StyleDecor?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Professional Decorator Team",
              "Flexible Scheduling",
              "Transparent Pricing",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle className="text-purple-600 mt-1" />
                <p className="text-base-content/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCoverage;
