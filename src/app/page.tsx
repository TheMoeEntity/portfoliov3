import About from "../components/About";
import Services from "../components/Services";
import Works from "../components/Works";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Services />
      <Works />
    </main>
  );
}
