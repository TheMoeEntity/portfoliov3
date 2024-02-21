"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../app/page.module.css";

export const Header = () => {
  const [open, setAnim] = useState<boolean>(false);
  const router = useRouter();
  const linkAction = (link?: string): void => {
    setAnim(false);
    if (link) {
      router.push(link);
    }
  };
  return (
    <header>
      <Link href={"/"}>
        <div className={styles["logo"]}>M O E</div>
      </Link>
      <div onClick={() => setAnim(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div
        style={{ top: open ? "0" : "-100%" }}
        className={`${styles.sidebar}`}
      >
        <div
          style={{
            opacity: open ? "1" : "0",
            zIndex: open ? "3" : "-1",
            transform: open ? "scale(1)" : "scale(0.1)",
          }}
          className={styles.sideContent}
        >
          <div onClick={() => setAnim(false)} className={styles.close}>
            <span>&times;</span>
          </div>
          <ul>
            <li onClick={() => linkAction("/")}>HOME</li>
            <li onClick={() => linkAction("/#services")}>SERVICES</li>
            <li onClick={() => linkAction("/#projects")}>WORKS</li>
            <li onClick={() => linkAction("/about")}>ABOUT</li>
            <li onClick={() => linkAction("/contact")}>CONTACT ME</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
