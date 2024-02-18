import { linkType, testimonialsType } from "./types";

export class Helpers {
  static customDonations = ["₦40k", "₦100k", "₦30k", "₦60k"];
  static assets: { title: string; icon: string; text: string }[] = [
    {
      title: "Education & Food for Children",
      icon: "fas fa-book-open",
      text: "Empowering young minds with knowledge and nourishment for a brighter future.",
    },
    {
      title: "Outreach",
      icon: "fas fa-hands-helping",
      text: "Extending a helping hand to communities through impactful outreach initiatives. ",
    },
    {
      title: "Grants and Scholarships",
      icon: "fas fa-graduation-cap",
      text: "Fueling dreams with opportunities through grants and scholarships for aspiring minds.",
    },
  ];
  static images = [
    {
      // src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      src: "/images/outreach7.jpg",
      width: 330,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
      tags: [
        { value: "Education", title: "Education" },
        { value: "Outreach", title: "Outreach" },
      ],
    },
    {
      // src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      src: "/images/outreach2.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Classroom", title: "Classroom" },
        { value: "Scholarships", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/outreach6.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://borgenproject.org/wp-content/uploads/Charities-Operating-in-Nigeria-1030x690.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Education", title: "Education" },
        { value: "Outreach", title: "Outreach" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/outreach4.jpg",
      width: 340,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
  ];
  static links: linkType[] = [
    {
      name: "Home",
      isActive: false,
      href: "",
    },
    {
      name: "Services",
      isActive: false,
      href: "#services",
    },
    {
      name: "About",
      isActive: false,
      href: "#about",
    },
    {
      name: "Testimonials",
      isActive: false,
      href: "#testimonials",
    },
    {
      name: "Donations",
      isActive: false,
      href: "donations",
    },
    {
      name: "Contact",
      isActive: false,
      href: "contact",
    },
  ];
}
