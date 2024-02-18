"use client";
import Image, { StaticImageData } from "next/image";
import styles from "../../app/page.module.css";
import profile from "../../../public/images/zstinger3.png";
import nosrati from "../../../public/images/nosrati.png";
import dove from "../../../public/images/dovehospital.png";
import aman from "../../../public/images/aman.png";
import { useRouter } from "next/navigation";
import { portfolioData } from "@/Helpers/types";

const Works = ({ works }: { works: portfolioData[] }) => {
  const assets: {
    name: string;
    img: StaticImageData;
    slug: string;
    text: string;
  }[] = [
    {
      name: "ZStinger Inc.",
      img: profile,
      slug: "zstinger-inspections",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      name: "Nosrati Law Group",
      img: nosrati,
      slug: "nosratilaw",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      name: "Dove Hospital",
      img: dove,
      slug: "dovehospital",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      name: "AMAN Awards",
      img: aman,
      slug: "aman-awards",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];
  const router = useRouter();
  return (
    <div id="projects" className={styles.services}>
      <h1 className={styles.title}>Works</h1>
      <section>
        <h1>Projects I have worked on</h1>
      </section>
      <div className={styles.projects}>
        {works.map((x) => (
          <div key={x.id}>
            <div className={styles.img}>
              <div className={styles.overlay}>
                <div className={styles.projectName}>{x.name}</div>
              </div>
              <Image
                src={"/images/" + x.images[0]}
                style={{
                  objectFit: "cover",
                }}
                alt={"Profile of " + x.name}
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 2560px) 100vw, (max-width: 2560px) 50vw, 33vw"
              />
            </div>
            <div className={styles.details}>
              <div>
                <p>
                  {x.details[0].split(/\s+/).slice(0, 20).join(" ") + "..."}
                </p>
                <div onClick={() => router.push("/works/" + x.slug)}>
                  &nbsp;<a>L e a r n &nbsp; M o r e</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
