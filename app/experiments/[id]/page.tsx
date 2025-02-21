import { notFound } from "next/navigation";
import experiments from "../experimentsData";

interface ExperimentPageProps {
  params: Promise<{ id: string }>;
}

const ExperimentDetail = async ({ params }: ExperimentPageProps) => {
  const { id } = await params;
  const experiment = experiments.find((exp) => exp.id === id);

  if (!experiment) return notFound();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{experiment.title}</h1>
        <p className="text-lg text-gray-600 mt-2">{experiment.shortDescription}</p>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg mb-6">
        <span className="text-gray-500 text-lg">Placeholder Image for {experiment.title}</span>
      </div>

      {/* Experiment Details */}
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">About the Experiment</h2>
        <p className="text-gray-700 leading-relaxed">{experiment.details}</p>
        
        {/* Metadata Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Difficulty Level */}
          <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800">Difficulty Level</h3>
            <p className="text-blue-600">{experiment.difficulty}</p>
          </div>

          {/* Equipment Required */}
          <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800">Equipment Required</h3>
            <ul className="text-green-600 list-disc list-inside">
              {experiment.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperimentDetail;
