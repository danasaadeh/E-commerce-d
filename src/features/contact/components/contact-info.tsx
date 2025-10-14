import type React from "react";
import { Phone, Email } from "@mui/icons-material";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-8">
      {/* Call Section */}
      <div className="flex items-start gap-4">
        <div className="bg-red-500 text-white p-3 rounded-full">
          <Phone fontSize="medium" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Call To Us</h3>
          <p className="text-gray-600 text-sm mb-2">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-gray-900 text-sm">Phone: +8801611112222</p>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Email Section */}
      <div className="flex items-start gap-4">
        <div className="bg-red-500 text-white p-3 rounded-full">
          <Email fontSize="medium" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Write To Us</h3>
          <p className="text-gray-600 text-sm mb-2">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-gray-900 text-sm mb-1">
            Emails: customer@exclusive.com
          </p>
          <p className="text-gray-900 text-sm">Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
