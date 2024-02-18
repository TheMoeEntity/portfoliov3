"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import { portfolioData } from "@/Helpers/types";

const WorksPage = ({ single }: { single: portfolioData }) => {
  return (
    <div id="projects" className={styles.services}>
      <h1 className={styles.title}>Works</h1>
      <section>
        <h1>{single?.name}</h1>
      </section>
      <div className={styles.projects}>
        <div>
          <div className={styles.img}>
            <div className={styles.overlay}></div>
            <Image
              src={"/images/" + single.images[0]}
              style={{
                objectFit: "cover",
              }}
              alt={
                "Picture of " +
                single?.name +
                ". Picture src: " +
                `/images/${single.images[0]}`
              }
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 2560px) 100vw, (max-width: 2560px) 50vw, 33vw"
            />
          </div>
          <div className={styles.details}>
            <div>
              <p>{single.details[0]}</p>
              <p>{single.details[1]}</p> <br />
              <p>{single.details[2]}</p>
              <div className={styles.skillSet}>
                <div>
                  <span>
                    <b> - Tech Stack</b>
                  </span>
                  <ul>
                    {single.stack.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.skillSet}>
                <div>
                  <span>
                    <b> - Project Date:&nbsp;{single.date} </b>
                  </span>
                </div>
              </div>
              <a target={`_blank`} rel="noopener noreferrer" href={single.url}>
                L I V E&nbsp; P R E V I E W
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;