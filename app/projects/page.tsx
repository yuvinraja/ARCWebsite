import Link from "next/link";
import Image from "next/image";
import projects from "./projectsData";

const ProjectsPage = () => {
  const droneExperiments = projects.filter((exp) => exp.category === "Drones");

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Drones</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {droneExperiments.map((exp) => (
          <Link
            key={exp.id}
            href={`/projects/${exp.id}`}
            className="group block aspect-square bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="relative w-full h-2/3">
              <Image
                src={exp.imageUrl}
                alt={exp.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 h-1/3 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{exp.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
