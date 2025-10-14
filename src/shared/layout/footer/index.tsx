import type React from "react";
import { Link } from "react-router-dom";
import { Send } from "@mui/icons-material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const links = {
  support: [
    "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ],
  account: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  quick: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Newsletter / Exclusive (Left) */}
          <div className="md:col-span-3">
            <h4 className="text-2xl font-bold mb-4">Exclusive</h4>
            <p className="text-base font-medium mb-4">Subscribe</p>

            <p className="text-sm text-gray-300 mb-4">
              Get 10% off your first order
            </p>

            <form
              className="flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <div className="relative w-full">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black border border-white rounded py-3 px-4 pr-12 text-sm placeholder:text-gray-400 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                >
                  <Send fontSize="small" />
                </button>
              </div>
            </form>
          </div>

          {/* Middle columns */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="text-base font-medium mb-4">Support</h5>
              <ul className="text-sm text-gray-300 space-y-3">
                {links.support.map((item, idx) => (
                  <li key={idx}>
                    {idx === 1 ? (
                      <a href={`mailto:${item}`} className="hover:underline">
                        {item}
                      </a>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-base font-medium mb-4">Account</h5>
              <ul className="text-sm text-gray-300 space-y-3">
                {links.account.map((l) => (
                  <li key={l}>
                    <Link to="#" className="hover:underline">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-base font-medium mb-4">Quick Link</h5>
              <ul className="text-sm text-gray-300 space-y-3">
                {links.quick.map((l) => (
                  <li key={l}>
                    <Link to="#" className="hover:underline">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-3">
            <h4 className="text-base font-medium mb-4">Download App</h4>
            <p className="text-xs text-gray-400 mb-2">
              Save $3 with App New User Only
            </p>

            <div className="flex items-start gap-2 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="/E-commerce-d/src/assets/images/footer/qr.jpg"
                  alt="qr code"
                  className="w-20 h-20 object-cover rounded border border-gray-700"
                />
              </div>
              <div className="flex flex-col gap-1">
                <a href="#" className="inline-block">
                  <img
                    src="/E-commerce-d/src/assets/icons/GooglePlay.svg"
                    alt="Google Play"
                    className="h-9 object-contain"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="/E-commerce-d/src/assets/icons/AppStore.svg"
                    alt="App Store"
                    className="h-9 object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-6 text-white text-lg">
              <a aria-label="facebook" href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-transparent stroke-white"
                style={{ strokeWidth: 20 }}
              />
              <a
                aria-label="instagram"
                href="#"
                className="hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a aria-label="linkedin" href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Centered Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-4">
          <div className="flex justify-center text-sm text-gray-500">
            <p className="text-center">
              © Copyright Rimel 2022. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
