import React from "react";
import AboutStory from "../components/about-story";
import BreadcrumbsNav from "../components/breadcrumbs-nav";
import FeaturesSection from "../components/features-section";
import StatsSection from "../components/states-section";
import TeamSection from "../components/team-section";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="px-6 py-4">
        <BreadcrumbsNav />
      </div>

      {/* Our Story Section */}
      <AboutStory />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
};

export default About;
