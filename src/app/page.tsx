import { Helpers } from "@/Helpers";
import { portfolioData } from "@/Helpers/types";
import About from "../components/About";
import Services from "../components/Services";
import Works from "../components/Works";
import styles from "./page.module.css";

export default async function Home() {
  const works = (await Helpers.getData2()) as portfolioData[];
  return (
    <main className={styles.main}>
      <About />
      <Services />
      <Works works={works} />
    </main>
  );
}
