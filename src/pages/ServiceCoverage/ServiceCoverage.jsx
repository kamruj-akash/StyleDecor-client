// import { Circle, Marker, Popup, TileLayer } from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Fix leaflet icon issue
// import { MapPinCheck } from "lucide-react";

// const ServiceCoverage = () => {
//   // Dhaka center coordinates
//   const center = [23.8103, 90.4125];

//   // Example coverage areas
//   const coverageZones = [
//     { name: "Gulshan Coverage", position: [23.7925, 90.4078], radius: 2500 },
//     { name: "Banani Coverage", position: [23.7936, 90.4043], radius: 2000 },
//     { name: "Dhanmondi Coverage", position: [23.7465, 90.376], radius: 3000 },
//     { name: "Uttara Coverage", position: [23.8759, 90.3795], radius: 3500 },
//   ];

//   return (
//     <div className="min-h-screen pt-20 pb-16 bg-base-100">
//       {/* Page Header */}
//       <div className="text-center max-w-3xl mx-auto px-4 mb-10">
//         <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
//           <MapPinCheck className="text-primary" />
//           Service Coverage Map
//         </h1>
//         <p className="text-base-content/70">
//           We provide home & ceremony decoration services across major areas of
//           Dhaka. Explore the service availability in your location.
//         </p>
//       </div>

//       {/* Map Section */}
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="rounded-xl overflow-hidden shadow-xl border border-base-200">
//           <MapContainer
//             center={center}
//             zoom={12}
//             scrollWheelZoom={true}
//             style={{ height: "550px", width: "100%" }}
//           >
//             <TileLayer
//               attribution="© OpenStreetMap"
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />

//             {/* coverage circles */}
//             {coverageZones.map((zone, index) => (
//               <Circle
//                 key={index}
//                 center={zone.position}
//                 radius={zone.radius}
//                 pathOptions={{
//                   color: "#0CA6A6",
//                   fillColor: "#0CA6A6",
//                   fillOpacity: 0.3,
//                 }}
//               >
//                 <Popup>
//                   <strong>{zone.name}</strong>
//                   <br />
//                   Approx radius: {zone.radius / 1000} km
//                 </Popup>
//               </Circle>
//             ))}

//             {/* main office marker */}
//             <Marker position={center}>
//               <Popup>
//                 <strong>StyleDecor Head Office</strong>
//                 <br />
//                 Dhaka, Bangladesh
//               </Popup>
//             </Marker>
//           </MapContainer>
//         </div>
//       </div>

//       {/* Bottom CTA */}
//       <div className="text-center mt-10">
//         <button className="btn btn-primary px-10">
//           Check Availability in Your Area
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceCoverage;


import React from 'react';

const ServiceCoverage = () => {
    return (
        <div>
            
        </div>
    );
};

export default ServiceCoverage;