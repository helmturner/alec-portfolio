import type { GetStaticProps, NextPage } from "next";
import mustacheImage from "../public/images/Mustache-Silhouette-2.svg";
import comingSoonImage from "../public/images/coming-soon.jpeg";
import {
  bioParagraphs,
  email,
  firstName,
  lastName,
  phone,
  Project,
  title,
} from "../constants";
import styles from "../styles/pages/index.module.css";
import Link from "next/link";
import Image from "next/future/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

type PageProps = { projects: Project[] };

export const getStaticProps: GetStaticProps<PageProps> = async ({}) => {
  const { projects, featuredProjects } = await import("../constants");
  return {
    props: { projects: featuredProjects.map((name) => projects[name]) },
  };
};

const Home: NextPage<PageProps> = ({ projects }) => {
  return (
    <>
      <section className={styles.bizcard}>
        <address>
          <h2>
            {firstName} {lastName}
          </h2>
          <h3>{title}</h3>
            <a href={`mailto:${email}`}>{email}</a>
            <br />
            <a href={`tel:${phone}`}>{phone}</a>
        </address>

        <ul>
          <li>REACT</li>
          <li>AZURE</li>
          <li>AWS</li>
          <li>GCP</li>
          <li>DOCKER</li>
          <li>NODE</li>
          <li>JS</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>GIT</li>
          <li>TS</li>
        </ul>
      </section>

      <main>
        <h2>Featured Projects</h2>
        {projects.map((project, index) => (
          <section key={index}>
            <Image src={comingSoonImage} alt={project.title} />
            <Link href={`projects/${project.slug}`}>
              <h3>{project.title}</h3>
            </Link>
            <h4>
              <small>{project.subtitle}</small>
            </h4>
            <small>
              Built with:{" "}
              <ul>
                {project.tech.map((item, index) => (
                  <li key={index}>{item.toUpperCase()}</li>
                ))}
              </ul>
            </small>
          </section>
        ))}
      </main>

      <aside>
        <h2>Bio</h2>
        {bioParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </aside>
    </>
  );
};

export default Home;
