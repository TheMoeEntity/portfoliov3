"use client";
import { useFullWidth } from "@/Helpers/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "../../app/page.module.css";
import profile from "../../../public/images/moe_profile.jpg";
import profile3 from "../../../public/images/profile.jpg";
import profile2 from "../../../public/images/moe_profile2.jpg";
import TypeEffect from "../About/TypeEffect";

const AboutPage = () => {
  const { anim } = useFullWidth(styles.fullWidth);
  const imageRef = useRef<null | HTMLImageElement>(null)
  const [hoverState, setHoverState] = useState<'9999'|'-1'>('9999')
  const hover = () => {
    if (imageRef.current) {
      console.log(imageRef.current.style.zIndex)
      imageRef.current.style.zIndex = '-1'
      setHoverState('-1')
    }
  }
  const hoverOut = () => {
    if (imageRef.current) {
      imageRef.current.style.zIndex = '9999'
      setHoverState('9999')

    }
  }
  return (
    <>
      <div id="about" className={styles.about}>
        <h1 className={styles.title}>About Me</h1>
        <section>
          <div className={anim}>
            <div className={styles.overlay}></div>
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
              Hey there! {`I'm`} Moses, but you can call me Moe. Welcome to my
              world of pixels and passion!{` I'm `}a frontend web developer with
              a fervent love for crafting captivating user experiences. Whether
              {`it's`} through the mesmerizing dance of{" "}
              <span>HTML, CSS, and TypeScript, </span>
              or the enchanting realm of iOS and Swift, I thrive on bringing
              ideas to life.
              <br /> <br />
              Picture this: a cozy corner with a steaming cup of coffee, my
              trusty keyboard adorned with code snippets, and an endless well of
              imagination.{` That's`} where the magic happens!{` I'm `}a firm
              believer in the power of creativity and technical wizardry,
              seamlessly blending both to create digital wonders.
              <br /> <br />{" "}
              {`But beyond the screen, you'll find a guy with a
              myriad of interests. When I'm not immersed in the world of code,
              you might catch me enjoying quality time with my friends and
              family. Whether it's sharing laughs over a meal or embarking on
              adventures together, these moments are precious to me. I also have
              a knack for exploration. I love visiting cool and interesting
              places, soaking in new cultures, and experiencing the wonders of
              the world. And what's a little exploration without a beer or two
              to cap off the day?`}
              <br /> <br />
            </p>
          </div>
        </section>
      </div>
      <div className={styles.moreabout}>
        <p>
          {` When it's time to unwind, you'll often find me indulging in my
          favorite pastimes. I'm a fan of comedy series that tickle my funny
          bone and transport me to another world of laughter (ahem, friends).
          And let's not forget about my love for reading! Whether it's diving
          into the latest bestseller or staying up-to-date with the
          ever-evolving world of technology through platforms like Medium, Stack
          Overflow, and Twitter, I'm always eager to expand my horizons.`}{" "}
          <br /> <br />
          {` As a frontend web developer, my goal is simple yet ambitious: to push
          the boundaries of what's possible. I strive to create not just
          functional websites and apps, but digital masterpieces that leave a
          lasting impression. I want users to feel awe-inspired, craving for
          more with each interaction.`}
        </p>
      </div>
      <div id="services" className={styles.services}>
        <h1 className={styles.title}>MY GOALS</h1>
        <section>
          <div>
            <h1>GOALS</h1>
            <p>
              {`  Whether it's refining the smallest detail of a user interface or
              embarking on a new adventure in app development, I'm always ready
              to embrace the challenge. Join me on this journey of limitless
              possibilities, and let's make some magic together!
              Now, let's delve deeper into my goals:`}
            </p>

            <h5 className="h5 mt-5">1 - Continuous Learning:</h5>
            <p className="mt-4">
              {`     In the fast-paced world of technology, there's always something
              new to learn. I'm committed to staying updated with the latest
              trends, tools, and techniques in frontend development. Whether
              it's attending workshops, reading industry blogs, or experimenting
              with cutting-edge technologies, I'm always eager to expand my
              skillset.`}
            </p>

            <h5 className="h5 mt-5">2 - Collaboration:</h5>
            <p className="mt-4">
              {`   I believe that great ideas are born through collaboration and
              teamwork. I aspire to work with talented individuals from diverse
              backgrounds, pooling our collective expertise to create innovative
              solutions. By fostering a collaborative environment built on
              trust, respect, and open communication, I aim to achieve
              excellence in every project.`}
            </p>
            <h5 className="h5 mt-5"> 3 - Impactful Design:</h5>
            <p className="mt-4">
              {`  Beyond aesthetics, I'm passionate about designing experiences that
              make a difference. Whether it's creating accessible interfaces for
              users with disabilities, optimizing performance for faster load
              times, or implementing sustainable design practices, I strive to
              make a positive impact through my work.`}
            </p>
          </div>
          <div onMouseEnter={() => hover()} onMouseLeave={() => hoverOut()}>
            <div style={{opacity: hoverState == '-1' ? '0':'1'}} className={styles.overlay}></div>
            <Image
              src={profile2}
              alt="Profile of Moses in a bar"
              priority
              sizes="(max-width: 1242px) 100vw, (max-width: 100%) 50vw, 33vw"
              fill
              style={{
                objectFit: "cover",
                transform: "rotate(10deg) translateX(-20px) translateY(20px)",
                boxShadow:
                  "5px 9px 15px 0 rgba(0, 0, 0, 0.6), 2.5px -9px 35px 0 rgba(143, 143, 143, 0.2)",
              }}
            />
            <Image
              ref={imageRef}
              src={profile3}
              style={{
                objectFit: "cover",
              }}
              alt="Profile of Moses in the office"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 1242px) 100vw, (max-width: 100%) 50vw, 33vw"
            />
          </div>
        </section>
        <p className={styles.moreabout}>
          {`In summary, my journey as a frontend web developer is not just about
          writing code—it's about making meaningful connections, pushing
          boundaries, and leaving a lasting legacy. Together, let's embark on
          this exciting adventure and transform ideas into digital reality!`}
        </p>
      </div>
    </>
  );
};

export default AboutPage;
