import type React from "react";

// Import SVGs as image URLs
import deliveryIcon from "../../../assets/icons/about/features/icon-delivery.svg";
import headsetIcon from "../../../assets/icons/about/features/headphones.svg";
import guaranteeIcon from "../../../assets/icons/about/features/Icon-secure.svg";

const features = [
  {
    icon: deliveryIcon,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: headsetIcon,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: guaranteeIcon,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 py-16">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          {/* Icon wrapper */}
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          {/* Title & Description */}
          <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
          <p className="text-gray-600 text-sm">{feature.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
