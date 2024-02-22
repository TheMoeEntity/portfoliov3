import Image from "next/image";
import styles from "../../app/page.module.css";
import coffee from "../../../public/images/coffee.jpg";

const Services = () => {
  return (
    <div id="services" className={styles.services}>
      <h1 className={styles.title}>Services</h1>
      <section>
        <div>
          <h2>MY SERVICES</h2>
          <h1>Here Are Some of My Skills</h1>
          <div className={styles.skillSet}>
            <div>
              <span>
                <b>1 - Backend Development</b>
              </span>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PHP</li>
                <li>Sanity CMS</li>
              </ul>
            </div>
            <div>
              <span>
                <b>3 - Others</b>
              </span>
              <ul>
                <li>Version Control (GitHub)</li>
                <li>Firebase</li>
                <li>MongoDB </li>
                <li>Postman</li>
                <li>Vercel/Netlify</li>
              </ul>
            </div>
          </div>
          <div className={styles.skillSet}>
            <div>
              <span>
                <b>2 - Front End Development</b>
              </span>
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Svelte.js</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={coffee}
            style={{
              objectFit: "cover",
            }}
            alt="Profile of Moses in a bar"
            fill
            quality={100}
            priority={true}
            sizes="(max-width: 1000px) 100vw, (max-width: 1000px) 50vw, 33vw"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
