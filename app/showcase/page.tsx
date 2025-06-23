import ShowcasePage from "./ShowcasePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Explore our showcase of projects and achievements.",
  keywords: "showcase, projects, achievements, portfolio",
  robots: "index, follow",
  openGraph: {
    title: "Showcase",
    description: "Explore our showcase of projects and achievements.",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <ShowcasePage />
    </div>
  );
};

export default page;
