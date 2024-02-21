"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import profile from "../../../public/images/profile.jpg";
import Link from "next/link";
import TypeEffect from "./TypeEffect";
import { useEffect, useRef, useState } from "react";
import { useFullWidth } from "@/Helpers/hooks";

const About = () => {
  const { anim } = useFullWidth(styles.fullWidth);

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
        <div style={{ position: "relative" }}>
          <div className={styles.flipped}>A B O U T </div>
          <h1 className={styles.name}>
            <TypeEffect />
          </h1>
          <p>
            Welcome to my realm of pixels and code! {`I'm`} Moe, a{" "}
            <span>frontend web developer</span> with a fiery passion for iOS and
            Swift. 🚀 <br /> <br />
            Imagine this: coffee brewing, code flowing, and boundless creativity
            at play. {`That's`} me! With a fusion of creativity and technical
            prowess, I craft stunning user interfaces that mesmerize. <br />{" "}
            <br /> But wait, {`there's`} more! By night, I become an iOS
            enthusiast, diving into app development with Swift.
            <br /> <br />I believe great websites and apps are like art—blending
            functionality and beauty to leave users spellbound. So, wield your
            virtual sword and join me in pushing boundaries and creating digital
            wonders. Welcome to my portfolio, where possibilities are limitless.
            {` Let's`} make magic together! ✨
          </p>
          <Link href="/contact" prefetch={true}>
            <div className={styles.contact}>HIRE ME!</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
