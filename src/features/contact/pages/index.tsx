import React from "react";
import BreadcrumbsNav from "../components/breadcrumb-nav";
import ContactForm from "../components/contact-form";
import ContactInfo from "../components/contact-info";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="px-6 py-4">
        <BreadcrumbsNav current="Contact" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12">
        {/* Left: Contact Info */}
        <ContactInfo />

        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
