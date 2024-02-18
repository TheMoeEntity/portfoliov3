"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import profile from "../../../public/images/profile.jpg";
import Link from "next/link";
import TypeEffect from "./TypeEffect";
import { useEffect, useState } from "react";

const About = () => {
  const [anim, setAnim] = useState<string>("");
  useEffect(() => {
    setAnim(styles.fullWidth);
    return () => {};
  }, []);

  return (
    <div id="about" className={styles.about}>
      <h1 className={styles.title}>About Me</h1>
      <section>
        <div className={anim}>
          <Image
            src={profile}
            style={{
              objectFit: "cover",
            }}
            alt="Profile of Moses in a bar"
            fill
            quality={100}
            priority={true}
            sizes="(max-width: 1242px) 100vw, (max-width: 1242px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.flipped}>A B O U T </div>
          <h1 className={styles.name}>
            <TypeEffect />
          </h1>
          <p>
            Welcome to my realm of pixels and code! {`I'm`} Moe, a{" "}
            <span>frontend web developer</span> with a fiery passion for iOS and
            Swift. 🚀 <br /> <br />
            Picture this: a cup of steaming hot coffee, a keyboard covered in
            code snippets, and a wild imagination ready to transform ideas into
            digital reality. {`That's`} me in a nutshell! With a magical blend
            of creativity and technical wizardry, {`I've`} mastered the art of
            crafting beautiful and intuitive user interfaces. My fingertips
            dance across the keys, weaving lines of{" "}
            <span>HTML, CSS, and TypeScript </span> <br /> <br />I believe great
            websites and apps are like art—blending functionality and beauty to
            leave users spellbound. So, wield your virtual sword and join me in
            pushing boundaries and creating digital wonders. Welcome to my
            portfolio, where possibilities are limitless.
            {`Let's`} make magic together! ✨
          </p>
          <div className={styles.links}>
            <span>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://github.com/TheMoeEntity"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </span>
            <span>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://instagram.com/NC_Moses"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </span>
            <span>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://wa.me/+2348075489362"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </span>
            <span>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://x.com/NMoses_"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </span>
            <span>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://linkedin.com/in/moses.nwigberi"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </span>
          </div>
          <Link href="/contact" prefetch={true}>
            <div className={styles.contact}>CONTACT ME!</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
