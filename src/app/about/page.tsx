import dynamic from "next/dynamic";
const AboutPage = dynamic(() => import("../../components/AboutPage"));

const About = () => {
  return <AboutPage />;
};

export default About;
