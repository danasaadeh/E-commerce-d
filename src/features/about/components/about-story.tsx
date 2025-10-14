import React from "react";
import aboutImg from "../../../assets/images/about/home.jpg"; // replace with your image

const AboutStory: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16">
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 million customers across
          the region.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast pace. Exclusive offers a diverse assortment in categories ranging
          from consumer products.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={aboutImg}
          alt="Shopping"
          className="rounded-lg shadow-md w-full"
        />
      </div>
    </section>
  );
};

export default AboutStory;
