import type { GetStaticProps, NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomeLayout from "../components/Layouts/HomeLayout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import { Project } from "../constants";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { NextPageWithLayout } from "./_app";

type PageProps = { projects: Project[] };

export const getStaticProps: GetStaticProps<PageProps> = async ({}) => {
  const { projects, featuredProjects } = await import("../constants");
  return {
    props: { projects: featuredProjects.map((name) => projects[name]) },
  };
};

const Home: NextPageWithLayout<PageProps> = ({ projects }) => {
  return (
    <>
      <Contact
        email="alec@alecvision.com"
        fullName="Alec Helmturner"
        jobTitle="Full-Stack Web Developer"
        telephone="+1 9184042425"
        className={styles.left}
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
      
      <section className={styles.main}>
        <h2>Featured Projects</h2>
        {projects.map((project, index) => (
          <Link key={index} href={`projects/${project.slug}`}>
            <a>
              <ProjectCard isOpen={false} project={project} />
            </a>
          </Link>
        ))}
      </section>

      <Bio className={styles.right}>
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
    </>
  );
};

Home.getLayout = (page) => (
  <HomeLayout>
    {page}
  </HomeLayout>
);

export default Home;
