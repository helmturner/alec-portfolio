import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Bio from "../components/Bio";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <Layout className={styles.layout}>
      <Nav className={styles.nav} />
      <Contact
        email="alec@alecvision.com"
        fullName="Alec Helmturner"
        jobTitle="Full-Stack Web Developer"
        telephone="+1 9184042425"
        className={styles.contact}
        skills={{
          general: [
            "JavaScript",
            "TypeScript",
            "Next.js",
            "git/Github",
            "REST",
            "GraphQL",
          ],
          frontend: [
            "HTML",
            "React",
            "Querying APIs",
            "Zod (runtime validation)",
            "React-Query",
            "Apollo (client)",
          ],
          backend: [
            "Node.js",
            "Docker",
            "API Design",
            "Schema Design",
            "Query Resolution",
            "Express",
            "MongoDB",
          ],
        }}
      />
      <Bio className={styles.bio}>
        <p>
          I am a software engineer with a passion for building web applications.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, nisi eu consectetur consectetur, nisl nisl consectetur nisl,
          euismod euismod nisi nisl euismod.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, nisi eu consectetur consectetur, nisl nisl consectetur nisl,
          euismod euismod nisi nisl euismod.
        </p>
      </Bio>

      <main className={styles.main}>MAIN MAIN MAIN</main>

      <Footer className={styles.footer}>FOOTER FOOTER FOOTER</Footer>
    </Layout>
  );
};

export default Home;
