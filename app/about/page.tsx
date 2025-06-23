import React from "react";
import AboutPage from "./AboutPage";
import CallToAction from "@/components/CallToAction";

const page = () => {
  return (
    <div className="-mb-16 -mt-16">
      <AboutPage />
      {/* Call to Action Section */}
      <CallToAction
        title="Want to Collaborate?"
        description="Whether you're a student, educator, or industry partner, we invite you to collaborate with us in advancing autonomous systems and AI education."
        primaryButton={{
          label: "Get Involved",
          href: "/contact",
          variant: "default",
        }}
        secondaryButton={{
          label: "Explore Projects",
          href: "/projects",
          variant: "outline",
        }}
      />
    </div>
  );
};

export default page;
