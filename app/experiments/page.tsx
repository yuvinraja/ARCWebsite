import Link from "next/link";
import experiments from "./experimentsData";

const ExperimentsPage = () => {
  // Separate experiments into categories
  const droneExperiments = experiments.filter((exp) => exp.category === "Drones");
  const groundVehicleExperiments = experiments.filter((exp) => exp.category === "Ground Vehicles");

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Experiments</h1>

      {/* Drones Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Drones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {droneExperiments.map((exp) => (
            <Link
              key={exp.id}
              href={`/experiments/${exp.id}`}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition bg-white flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600">{exp.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ground Vehicles Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Ground Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groundVehicleExperiments.map((exp) => (
            <Link
              key={exp.id}
              href={`/experiments/${exp.id}`}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition bg-white flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600">{exp.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperimentsPage;
