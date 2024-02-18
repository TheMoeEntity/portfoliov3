"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../../app/page.module.css";

export const Header = () => {
  const [open, setAnim] = useState<boolean>(false);
  return (
    <header>
      <Link href={"/"}>
        <div className={styles["logo"]}>M O E</div>
      </Link>
      <div onClick={() => setAnim(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div
        className={
          open
            ? `${styles.sidebar} ${styles.animateIn}`
            : `${styles.sidebar} ${styles.animateOut}`
        }
      >
        <div className={styles.sideContent}>
          <div onClick={() => setAnim(false)} className={styles.close}>
            <span>&times;</span>
          </div>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/#services">SERVICES</Link>
            </li>
            <li>
              <Link href="/#projects">WORKS</Link>
            </li>
            <li>
              <Link href="/#about">ABOUT</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT ME</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
