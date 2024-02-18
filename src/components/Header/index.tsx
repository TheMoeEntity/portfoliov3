import Link from "next/link";
import styles from "../../app/page.module.css";

export const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <div className={styles["logo"]}>M O E</div>
      </Link>
      <div>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};
