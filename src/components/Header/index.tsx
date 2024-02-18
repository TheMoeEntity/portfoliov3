import styles from "../../app/page.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles["logo"]}>M O E</div>
      <div>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};
