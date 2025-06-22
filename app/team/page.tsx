import TeamCard from "./TeamCard";
import { teamMembers } from "./teamData";
import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the talented individuals behind our success.",
  keywords: "team, professionals, expertise, collaboration",
  robots: "index, follow",
  openGraph: {
    title: "Our Team",
    description: "Meet the talented individuals behind our success.",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <div>
      <SectionHeading
        title="Meet Our Team"
        subtitle="We are a diverse group of professionals dedicated to delivering the best solutions for our clients."
      />
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
