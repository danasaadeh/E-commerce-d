import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const team = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: "/E-commerce-d/src/assets/images/about/team/man.png",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: "/E-commerce-d/src/assets/images/about/team/woman.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: "/E-commerce-d/src/assets/images/about/team/man2.png",
  },
  {
    name: "Chris Evans",
    role: "Marketing Lead",
    img: "/E-commerce-d/src/assets/images/about/team/man.png",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-white relative">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center mb-10">Our Team</h2>

      {/* Swiper */}
      <div className="relative pb-16">
        {/* 👈 extra bottom padding for the dots */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={
            {
              "--swiper-pagination-color": "#DB4444",
              "--swiper-pagination-bullet-inactive-color": "black",
              "--swiper-pagination-bottom": "10px", // moves dots below
            } as React.CSSProperties
          }
          className="pb-12"
        >
          {team.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center group cursor-pointer min-h-[420px]">
                {/* 👆 ensures consistent height so dots won’t overlap */}

                {/* Image */}
                <div className="w-full bg-gray-100 rounded-lg overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{member.role}</p>

                {/* Social icons */}
                <div className="flex gap-5 justify-center mt-auto pb-10">
                  {/* 👆 mt-auto pushes icons to the bottom */}
                  <a
                    href="#"
                    className="text-black hover:text-[#DB4444] transition-colors"
                    aria-label="Twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-[#DB4444] transition-colors"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-[#DB4444] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
