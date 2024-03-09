"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import { portfolioData } from "@/Helpers/types";
import Link from "next/link";



const Works = ({ works }: { works: portfolioData[] }) => {

  return (
    <div id="projects" className={styles.works}>
      <h1 className={styles.title}>Works</h1>
      <section>
        <h1>Projects I have worked on</h1>
      </section>
      <div className={styles.projects}>
        {works.length > 0
          ? works.map((x) => (
            <div className={styles.proj} key={x.id}>
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
                    <Link href={"/works/" + x.slug}>
                      <button>L e a r n &nbsp; M o r e</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )) : <div className="loading-failed">
            <i className={`fa fa-spinner ${styles.spinning}`}></i> Loading Works..</div>}


      </div>
    </div>
  );
};

export default Works;
