import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/src/components/ContactPage"));

const page = () => {
  return <ContactForm />;
};

export default page;
