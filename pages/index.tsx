import type { GetStaticProps } from "next";
import HomeLayout from "../components/Layouts/HomeLayout";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import {
  bioParagraphs,
  email,
  firstName,
  lastName,
  phone,
  Project,
  skills,
  title,
} from "../constants";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import type { NextPageWithLayout } from "./_app";

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
        email={email}
        fullName={`${firstName} ${lastName}`}
        jobTitle={`${title}`}
        telephone={phone}
        skills={skills}
        style={{ gridArea: "left" }}
      />

      <section style={{ gridArea: "center" }}>
        <h2>Featured Projects</h2>
        {projects.map((project, index) => (
          <Link key={index} href={`projects/${project.slug}`}>
            <a style={{textDecoration: 'none'}}>
              <ProjectCard isOpen={false} project={project} />
            </a>
          </Link>
        ))}
      </section>

      <Bio style={{ gridArea: "right" }}>
        {bioParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Bio>
      
    </>
  );
};

Home.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default Home;
