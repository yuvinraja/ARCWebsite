import { notFound } from "next/navigation";
import experiments from "../experimentsData";
import ExperimentDetailClient from "./ExperimentDetailClient";

interface ExperimentPageProps {
  params: { id: string };
}

const ExperimentDetail = async ({ params }: ExperimentPageProps) => {
  const awaitedparams = await params;
  const { id } = awaitedparams;
  const experiment = experiments.find((exp) => exp.id === id);

  if (!experiment) return notFound();

  return <ExperimentDetailClient experiment={experiment} />;
};

export default ExperimentDetail;
