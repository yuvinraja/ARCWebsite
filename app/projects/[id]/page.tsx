import { notFound } from "next/navigation";
import projects from "../projectsData";
import ProjectDetailsClient from "./ProjectViewer";

// Define a Project type based on your data structure
interface Project {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  // Add other fields as needed
}

// Optional: Get placeholder-enhanced data
const getPlaceholderData = (project: Project) => ({
  ...project,
  longDescription: "Detailed description...",
  specifications: {
    flightTime: "45 minutes",
    range: "5 km",
    camera: "4K Ultra HD",
    weatherResistance: "IP65 Rated",
    maxSpeed: "65 km/h",
    payload: "2.5 kg",
  },
  features: [/* your features */],
  applications: [/* your applications */],
});

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.shortDescription,
    openGraph: {
      images: [
        {
          url: process.env.NEXT_PUBLIC_SITE_URL + project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function DroneDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  const fullProject = getPlaceholderData(project);

  return <ProjectDetailsClient project={fullProject} />;
}
