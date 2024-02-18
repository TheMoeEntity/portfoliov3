import { Helpers } from "@/Helpers";
import { portfolioData } from "@/Helpers/types";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const WorksPage = dynamic(() => import("../../../components/WorksPage"));

const Works = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const single = (await Helpers.getSingle(id)) as portfolioData;

  if (!single) {
    notFound();
  }
  return <WorksPage single={single} />;
};

export default Works;
