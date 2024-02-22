import { Metadata } from "next";
import dynamic from "next/dynamic";
const AboutPage = dynamic(() => import("../../components/AboutPage"));
export const metadata: Metadata = {
  title: "MOE - Frontend Web Developer | About",
  description:
    "About page for Moses Chukwudi Nwigberi, a bad-ass web developer based in Lagos, Nigeria.",
  keywords:
    "Moe, About Moses, Moses Chukwudi Nwigberi, Web Developer, Lagos, Ebonyi State, Nigeria",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Moe's Portfolio",
};

const About = () => {
  return <AboutPage />;
};

export default About;
