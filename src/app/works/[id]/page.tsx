import { Helpers } from "@/Helpers";
import { portfolioData } from "@/Helpers/types";
import WorksPage from "@/src/components/WorksPage";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
// const WorksPage = dynamic(() => import("../../../components/WorksPage"));

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const single = (await Helpers.getSingle(params.id)) as portfolioData;
  return {
    title:
      "MOE - Frontend Web Developer | My works" +
      (single ? ` | ${single.name}` : ""),
    description:
      "More details about projects I have worked on. Portfolio page for Moses Chukwudi Nwigberi, a bad-ass web developer based in Lagos, Nigeria.",
    keywords:
      "Moe, Moses Chukwudi Nwigberi, Web Developer, works, projects, Lagos, Ebonyi State, Nigeria",
    authors: [{ name: "Moses Chukwudi Nwigberi" }],
    creator: "Moses Chukwudi Nwigberi",
    applicationName: "Moe's Portfolio",
  };
}
const Works = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const single = (await Helpers.getSingle(id)) as portfolioData;

  if (!single) {
    notFound();
  }
  return <WorksPage single={single} />;
};

export default Works;
