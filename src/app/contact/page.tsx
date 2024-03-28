import { Metadata } from "next";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/src/components/ContactPage"));
export const metadata: Metadata = {
  title: "MOE - Frontend Web Developer | Contact me",
  description:
    "Get in touch with Moses Chukwudi Nwigberi, a bad-ass web developer based in Lagos, Nigeria.",
  keywords:
    "Moe, Moses Chukwudi Nwigberi, Web Developer, contact, contact information, projects, Lagos, Ebonyi State, Nigeria",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Moe's Portfolio",
};
const page = () => {
  return (
    <main>
      <ContactForm />
    </main>
  )
};

export default page;
