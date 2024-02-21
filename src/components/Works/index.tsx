"use client";
import Image, { StaticImageData } from "next/image";
import styles from "../../app/page.module.css";
import { useRouter } from "next/navigation";
import { portfolioData } from "@/Helpers/types";
import Link from "next/link";

const Works = ({ works }: { works: portfolioData[] }) => {
  const router = useRouter();
  return (
    <div id="projects" className={styles.works}>
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
                <div className={styles.viewMore}>
                  <button onClick={() => router.push("/works/" + x.slug)}>
                    L e a r n &nbsp; M o r e
                  </button>
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
