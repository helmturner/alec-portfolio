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
      <Contact className={styles.contact}>CONTACT CONTACT CONTACT</Contact>

      <Bio className={styles.bio}>BIO BIO BIO</Bio>

      <main className={styles.main}>MAIN MAIN MAIN</main>

      <Footer className={styles.footer}>FOOTER FOOTER FOOTER</Footer>
    </Layout>
  );
};

export default Home;
