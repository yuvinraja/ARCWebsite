// File: app/projects/[id]/page.tsx
import projects from "../projectsData"; // adjust if needed
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: { id: string };
}

const ProjectDetail = async ({ params }: ProjectPageProps) => {
  const awaitedparams = await params;
  const { id } = awaitedparams;
  const project = projects.find((exp) => exp.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-blue-600 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Link href="/projects" className="text-blue-600 underline mb-6 inline-block">
        ← Back to Projects
      </Link>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 text-lg">{project.shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
