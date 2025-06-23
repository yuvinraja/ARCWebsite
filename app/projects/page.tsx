import { Metadata } from "next";
import ProjectsPage from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Drone Solutions",
  description:
    "Explore our innovative drone projects for surveillance, cinematography, and specialized applications.",
  keywords:
    "drones, drone technology, surveillance drones, cinematography drones, specialized drone applications, autonomous systems",
  robots: "index, follow",
  openGraph: {
    title: "Drone Solutions",
    description:
      "Explore our innovative drone projects for surveillance, cinematography, and specialized applications.",
    type: "website",
  },
};

const Page = () => {
  return (
    <div className="">
      <ProjectsPage />
    </div>
  );
};

export default Page;
