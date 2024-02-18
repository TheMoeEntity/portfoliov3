"use client";
import Image, { StaticImageData } from "next/image";
import styles from "../../app/page.module.css";
import profile from "../../../public/images/zstinger3.png";
import nosrati from "../../../public/images/nosrati.png";
import dove from "../../../public/images/dovehospital.png";
import aman from "../../../public/images/aman.png";

const Works = () => {
  const assets: {
    name: string;
    img: StaticImageData;
    text: string;
  }[] = [
    {
      name: "ZStinger Inc.",
      img: profile,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      name: "Nosrati Law Group",
      img: nosrati,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      name: "Dove Hospital",
      img: dove,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      name: "AMAN Awards",
      img: aman,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];

  return (
    <div id="projects" className={styles.services}>
      <h1 className={styles.title}>Works</h1>
      <section>
        <h1>Projects I have worked on</h1>
      </section>
      <div className={styles.projects}>
        {assets.map((x, i) => (
          <div key={i}>
            <div className={styles.img}>
              <div className={styles.overlay}>
                <div className={styles.projectName}>{x.name}</div>
              </div>
              <Image
                src={x.img}
                style={{
                  objectFit: "cover",
                }}
                alt="Profile of Moses in a bar"
                fill
                quality={100}
                priority={true}
                sizes="(max-width: 2560px) 100vw, (max-width: 2560px) 50vw, 33vw"
              />
            </div>
            <div className={styles.details}>
              <div>
                <p>{x.text}</p>
                <a>L e a r n &nbsp; M o r e</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
